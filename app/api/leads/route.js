import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { buildWhatsAppUrl } from "../../config";

function clean(value) {
  return String(value || "").trim().slice(0, 500);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const lead = {
      createdAt: new Date().toISOString(),
      name: clean(body.name),
      phone: clean(body.phone),
      treatment: clean(body.treatment),
      preferredTime: clean(body.preferredTime),
      message: clean(body.message),
      source: "turabi-dentistry-website",
    };

    if (!lead.name || !lead.phone) {
      return NextResponse.json({ error: "Name and phone number are required." }, { status: 400 });
    }

    const whatsappMessage = [
      "New appointment request for Turabi Dentistry",
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Treatment: ${lead.treatment}`,
      lead.preferredTime ? `Preferred time: ${lead.preferredTime}` : "",
      lead.message ? `Message: ${lead.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (process.env.VERCEL !== "1") {
      const leadsDirectory = path.join(process.cwd(), "leads");
      await mkdir(leadsDirectory, { recursive: true });
      await appendFile(path.join(leadsDirectory, "inquiries.jsonl"), `${JSON.stringify(lead)}\n`, "utf8");
    }

    return NextResponse.json({ ok: true, whatsappUrl: buildWhatsAppUrl(whatsappMessage) });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "Lead submission failed." }, { status: 500 });
  }
}
