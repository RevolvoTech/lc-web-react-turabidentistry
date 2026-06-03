export const clinic = {
  name: "Turabi Dentistry",
  location: "Imambargah Road, Bhalwal",
  cityLine: "Bhalwal, Punjab",
  phoneDisplay: "+92 306 5313572",
  phoneE164: "923065313572",
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent(message)}`;
}
