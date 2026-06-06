export type ClinicConfig = {
  name: string;
  location: string;
  cityLine: string;
  address: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  phoneDisplay: string;
  phoneE164: string;
};

export const clinic: ClinicConfig = {
  name: "Turabi Dentistry",
  location: "Imambargah Road, Main Bazar, Bhalwal, 40410",
  cityLine: "Bhalwal, Punjab",
  address: "Turabi Dentistry, Imambargah Road, Main Bazar, Bhalwal, 40410, Punjab, Pakistan",
  streetAddress: "Imambargah Road, Main Bazar",
  addressLocality: "Bhalwal",
  addressRegion: "Punjab",
  postalCode: "40410",
  addressCountry: "PK",
  phoneDisplay: "+92 306 5313572",
  phoneE164: "923065313572",
};

export const siteUrl = "https://turabi-dentistry.vercel.app";
export const googleMapsPlusCode = "8J4J7W82+HWR";
export const clinicLatitude = 32.2664875;
export const clinicLongitude = 72.902265625;

export const clinicServices = [
  "Braces",
  "Clear aligners",
  "Dental implants",
  "Root canal treatment",
  "Dental bridges",
  "Oral surgery",
  "Full mouth rehabilitation",
  "Family dental checkups",
];

const encodedMapCoordinates = encodeURIComponent(`${clinicLatitude},${clinicLongitude}`);

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedMapCoordinates}&z=18&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedMapCoordinates}&travelmode=driving`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent(message)}`;
}
