export const PAKISTAN_TIME_ZONE = "Asia/Karachi";

export type AppointmentParts = {
  label: string;
  iso: string;
};

export type AppointmentFormPayload = {
  name: string;
  phone: string;
  treatment: string;
  message?: string;
};

type PakistanNowParts = {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
};

export const timeSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

export function getPakistanNowParts(): PakistanNowParts {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: PAKISTAN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    year: values.year ?? "",
    month: values.month ?? "",
    day: values.day ?? "",
    hour: values.hour ?? "0",
    minute: values.minute ?? "0",
  };
}

export function getPakistanTodayIso(): string {
  const parts = getPakistanNowParts();
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getPakistanCurrentMinutes(): number {
  const parts = getPakistanNowParts();
  return Number(parts.hour) * 60 + Number(parts.minute);
}

export function getTimeMinutes(value: string): number {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

export function formatTime(value: string): string {
  const [hour, minute] = value.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

export function formatDate(dateIso: string): string {
  if (!dateIso) return "";
  const [year, month, day] = dateIso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatAppointment(dateIso: string, timeValue: string): AppointmentParts {
  if (!dateIso || !timeValue) {
    return { label: "", iso: "" };
  }

  return {
    label: `${formatDate(dateIso)} at ${formatTime(timeValue)} (Pakistan time)`,
    iso: `${dateIso}T${timeValue}:00+05:00`,
  };
}

export function buildAppointmentMessage(form: AppointmentFormPayload, appointment: AppointmentParts): string {
  return [
    "Appointment request for Turabi Dentistry",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Treatment: ${form.treatment}`,
    `Preferred appointment: ${appointment.label}`,
    `Clinic timestamp: ${appointment.iso}`,
    form.message ? `Message: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
