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
  location: "Imambargah Road, Main Bazar, Bhalwal, 40410",
  cityLine: "Bhalwal, Punjab",
  address: "Turabi Dentistry, Imambargah Road, Main Bazar, Bhalwal, 40410, Punjab, Pakistan",
  phoneDisplay: "+92 306 5313572",
  phoneE164: "923065313572",
};

export const siteUrl = "https://turabi-dentistry.vercel.app";

const encodedMapAddress = encodeURIComponent(clinic.address);

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedMapAddress}&z=17&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent(message)}`;
}
