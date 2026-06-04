export type ClinicConfig = {
  name: string;
  location: string;
  cityLine: string;
  address: string;
  phoneDisplay: string;
  phoneE164: string;
};

export const clinic: ClinicConfig = {
  name: "Turabi Dentistry",
  location: "Imambargah Road, Bhalwal",
  cityLine: "Bhalwal, Punjab",
  address: "Imambargah Road, Bhalwal, Punjab, Pakistan",
  phoneDisplay: "+92 306 5313572",
  phoneE164: "923065313572",
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent(message)}`;
}
