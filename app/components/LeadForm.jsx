"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { buildWhatsAppUrl, clinic } from "../config";

const initialForm = {
  name: "",
  phone: "",
  treatment: "Smile assessment",
  preferredTime: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitLead(event) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const fallbackMessage = [
        "Appointment request for Turabi Dentistry",
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Treatment: ${form.treatment}`,
        form.preferredTime ? `Preferred time: ${form.preferredTime}` : "",
        form.message ? `Message: ${form.message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Could not send your request.");
      }

      const body = await response.json();
      const nextWhatsAppUrl = body.whatsappUrl || buildWhatsAppUrl(fallbackMessage);
      setWhatsappUrl(nextWhatsAppUrl);
      setStatus("success");
      setForm(initialForm);
      window.location.assign(nextWhatsAppUrl);
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError.message);
    }
  }

  return (
    <form className="lead-form" onSubmit={submitLead}>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Patient name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="+92 300 0000000"
            autoComplete="tel"
            required
          />
        </label>
      </div>

      <label>
        Treatment interest
        <select name="treatment" value={form.treatment} onChange={updateField}>
          <option>Smile assessment</option>
          <option>Porcelain veneers</option>
          <option>Dental implants</option>
          <option>Clear aligners</option>
          <option>Root canal treatment</option>
          <option>Family dental checkup</option>
        </select>
      </label>

      <label>
        Preferred appointment time
        <input
          name="preferredTime"
          value={form.preferredTime}
          onChange={updateField}
          placeholder="Morning, afternoon, or a specific day"
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Tell us what you would like help with."
          rows="4"
        />
      </label>

      <button className="button button-primary form-submit" type="submit" disabled={status === "loading"}>
        <Send size={19} aria-hidden="true" />
        {status === "loading" ? "Sending request" : "Request appointment"}
      </button>

      <div className="form-note" role="status" aria-live="polite">
        {status === "success" && (
          <span className="success">
            <CheckCircle2 size={18} aria-hidden="true" />
            WhatsApp opened for {clinic.phoneDisplay}. Send the message there to confirm the inquiry.
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Open WhatsApp
              </a>
            )}
          </span>
        )}
        {status === "error" && (
          <span className="error">
            <AlertCircle size={18} aria-hidden="true" />
            {error}
          </span>
        )}
      </div>
    </form>
  );
}
