"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { AlertCircle, CalendarDays, CheckCircle2, Clock3, Send } from "lucide-react";
import { buildWhatsAppUrl, clinic } from "../config";
import {
  buildAppointmentMessage,
  formatAppointment,
  formatTime,
  getPakistanCurrentMinutes,
  getPakistanTodayIso,
  getTimeMinutes,
  timeSlots,
} from "../lib/appointment";

type LeadFormState = {
  name: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialForm = {
  name: "",
  phone: "",
  treatment: "Smile assessment",
  preferredDate: "",
  preferredTime: "",
  message: "",
} satisfies LeadFormState;

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormState>(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const todayIso = useMemo(() => getPakistanTodayIso(), []);
  const appointment = useMemo(
    () => formatAppointment(form.preferredDate, form.preferredTime),
    [form.preferredDate, form.preferredTime]
  );

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const name = event.target.name as keyof LeadFormState;
    const { value } = event.target;
    setForm((current) => {
      if (name === "preferredDate") {
        return { ...current, preferredDate: value, preferredTime: "" };
      }

      return { ...current, [name]: value };
    });
  }

  function selectTime(value: string) {
    setForm((current) => ({ ...current, preferredTime: value }));
  }

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      if (!appointment.label) {
        throw new Error("Please select a preferred appointment date and time.");
      }

      const whatsappMessage = buildAppointmentMessage(form, appointment);
      const nextWhatsAppUrl = buildWhatsAppUrl(whatsappMessage);
      setWhatsappUrl(nextWhatsAppUrl);
      setStatus("success");
      setForm(initialForm);
      window.location.assign(nextWhatsAppUrl);
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Could not send your request.");
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

      <div className="appointment-picker">
        <div className="appointment-field">
          <label htmlFor="preferredDate">
            <CalendarDays size={17} aria-hidden="true" />
            Preferred appointment date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={todayIso}
            value={form.preferredDate}
            onChange={updateField}
            required
          />
        </div>

        <fieldset className="time-slot-field">
          <legend>
            <Clock3 size={17} aria-hidden="true" />
            Preferred time
          </legend>
          <div className="time-slot-grid">
            {timeSlots.map((slot) => {
              const isPastToday =
                form.preferredDate === todayIso &&
                getTimeMinutes(slot) <= getPakistanCurrentMinutes() + 15;
              const disabled = !form.preferredDate || isPastToday;
              const selected = form.preferredTime === slot;

              return (
                <button
                  className="time-slot"
                  type="button"
                  key={slot}
                  disabled={disabled}
                  aria-pressed={selected}
                  onClick={() => selectTime(slot)}
                >
                  {formatTime(slot)}
                </button>
              );
            })}
          </div>
          <p className="timezone-note">Slots are shown in Pakistan time and synced to the selected date.</p>
        </fieldset>

        {appointment.label && (
          <div className="appointment-summary">
            <CheckCircle2 size={17} aria-hidden="true" />
            {appointment.label}
          </div>
        )}
      </div>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Tell us what you would like help with."
          rows={4}
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
