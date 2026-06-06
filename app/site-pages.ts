export type LocalSeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly";
};

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "about",
    title: "About Turabi Dentistry | Dentist Hospital in Bhalwal",
    description:
      "Learn about Turabi Dentistry on Imambargah Road, Main Bazar, Bhalwal, offering calm consultations and planned dental care.",
    eyebrow: "About Turabi Dentistry",
    heading: "A calm dentist hospital for patients in Bhalwal.",
    intro:
      "Turabi Dentistry is built around clear consultation, comfort-first care, and practical treatment planning for patients in Bhalwal and nearby areas.",
    bullets: [
      "Premium dental environment on Imambargah Road, Main Bazar",
      "Consultations focused on understanding the concern first",
      "Care pathways for cosmetic, restorative, orthodontic, and family dental needs",
    ],
    ctaLabel: "Book an assessment",
    sitemapPriority: 0.85,
    changeFrequency: "monthly",
  },
  {
    slug: "treatments",
    title: "Dental Treatments in Bhalwal | Turabi Dentistry",
    description:
      "Explore braces, aligners, implants, RCT, bridges, oral surgery, and full mouth rehabilitation at Turabi Dentistry in Bhalwal.",
    eyebrow: "Dental Treatments",
    heading: "Dental care planned around comfort, function, and confidence.",
    intro:
      "The clinic offers treatment planning for everyday dental concerns as well as advanced cosmetic and restorative cases.",
    bullets: [
      "Orthodontic options including braces and clear aligners",
      "Restorative care including RCT, dental bridges, and implants",
      "Full mouth rehabilitation planning for bite, function, and long-term oral health",
    ],
    ctaLabel: "Ask about treatment options",
    sitemapPriority: 0.9,
    changeFrequency: "weekly",
  },
  {
    slug: "braces-bhalwal",
    title: "Braces in Bhalwal | Turabi Dentistry",
    description:
      "Book a braces consultation in Bhalwal for straighter teeth, bite balance, and planned orthodontic care at Turabi Dentistry.",
    eyebrow: "Braces in Bhalwal",
    heading: "Planned orthodontic care for straighter teeth.",
    intro:
      "Braces treatment can support smile alignment, bite correction, and long-term oral health when planned with a clear consultation.",
    bullets: [
      "Assessment of tooth alignment and bite concerns",
      "Treatment planning for comfort, timing, and expected progress",
      "Suitable for patients asking about orthodontic correction in Bhalwal",
    ],
    ctaLabel: "Book braces consultation",
    sitemapPriority: 0.82,
    changeFrequency: "weekly",
  },
  {
    slug: "clear-aligners-bhalwal",
    title: "Clear Aligners in Bhalwal | Turabi Dentistry",
    description:
      "Ask about clear aligners in Bhalwal for discreet orthodontic treatment planning at Turabi Dentistry.",
    eyebrow: "Clear Aligners",
    heading: "Discreet alignment planning for everyday confidence.",
    intro:
      "Clear aligners may suit patients who want orthodontic correction with a more discreet treatment experience.",
    bullets: [
      "Alignment assessment before treatment recommendation",
      "Guidance on convenience, compliance, and expected timeline",
      "Separate from braces while still part of orthodontic care",
    ],
    ctaLabel: "Ask about aligners",
    sitemapPriority: 0.8,
    changeFrequency: "weekly",
  },
  {
    slug: "dental-implants-bhalwal",
    title: "Dental Implants in Bhalwal | Turabi Dentistry",
    description:
      "Book a dental implant consultation in Bhalwal for stable tooth replacement planning at Turabi Dentistry.",
    eyebrow: "Dental Implants",
    heading: "Stable replacement planning for missing teeth.",
    intro:
      "Dental implant consultations help patients understand replacement options, timelines, comfort steps, and long-term function.",
    bullets: [
      "Consultation for missing tooth replacement options",
      "Planning around comfort, oral health, and function",
      "Guidance before committing to an implant treatment pathway",
    ],
    ctaLabel: "Book implant consultation",
    sitemapPriority: 0.82,
    changeFrequency: "weekly",
  },
  {
    slug: "root-canal-bhalwal",
    title: "Root Canal Treatment in Bhalwal | Turabi Dentistry",
    description:
      "Request an RCT consultation in Bhalwal for tooth pain, infection concerns, and root canal treatment planning at Turabi Dentistry.",
    eyebrow: "Root Canal Treatment",
    heading: "RCT planning for tooth pain and infection concerns.",
    intro:
      "Root canal treatment may be recommended when a tooth needs care for pain, deep decay, or infection-related concerns.",
    bullets: [
      "Assessment of pain, sensitivity, or infection symptoms",
      "Clear explanation of treatment steps before care begins",
      "Planning focused on saving natural teeth where suitable",
    ],
    ctaLabel: "Request RCT consultation",
    sitemapPriority: 0.78,
    changeFrequency: "weekly",
  },
  {
    slug: "dental-bridges-bhalwal",
    title: "Dental Bridges in Bhalwal | Turabi Dentistry",
    description:
      "Ask Turabi Dentistry about dental bridges in Bhalwal for replacing missing teeth and restoring smile function.",
    eyebrow: "Dental Bridges",
    heading: "Bridge options for restoring missing teeth.",
    intro:
      "Dental bridges can help restore chewing function and smile appearance when a missing tooth needs a fixed replacement option.",
    bullets: [
      "Consultation for replacement options after tooth loss",
      "Planning around bite, appearance, and oral health",
      "Clear discussion of bridge suitability and alternatives",
    ],
    ctaLabel: "Ask about bridges",
    sitemapPriority: 0.74,
    changeFrequency: "monthly",
  },
  {
    slug: "oral-surgery-bhalwal",
    title: "Oral Surgery in Bhalwal | Turabi Dentistry",
    description:
      "Request an oral surgery consultation in Bhalwal at Turabi Dentistry for treatment planning and next-step guidance.",
    eyebrow: "Oral Surgery",
    heading: "Surgical dental care with clear next steps.",
    intro:
      "Oral surgery consultations help patients understand the concern, comfort approach, and treatment pathway before care begins.",
    bullets: [
      "Assessment-led planning for surgical dental concerns",
      "Clear explanation of preparation and follow-up steps",
      "Comfort-first guidance for patients who feel anxious about treatment",
    ],
    ctaLabel: "Request surgery consultation",
    sitemapPriority: 0.74,
    changeFrequency: "monthly",
  },
  {
    slug: "full-mouth-rehabilitation-bhalwal",
    title: "Full Mouth Rehabilitation in Bhalwal | Turabi Dentistry",
    description:
      "Book a full mouth rehabilitation consultation in Bhalwal for bite, function, restorations, and long-term oral health planning.",
    eyebrow: "Full Mouth Rehabilitation",
    heading: "Comprehensive planning for complex dental needs.",
    intro:
      "Full mouth rehabilitation is considered when multiple teeth, bite function, restorations, and appearance need to be planned together.",
    bullets: [
      "Comprehensive review of bite, function, and smile goals",
      "Treatment sequencing for complex restorative needs",
      "Planning focused on long-term comfort and oral health",
    ],
    ctaLabel: "Book rehabilitation consultation",
    sitemapPriority: 0.82,
    changeFrequency: "weekly",
  },
  {
    slug: "family-dentist-bhalwal",
    title: "Family Dentist in Bhalwal | Turabi Dentistry",
    description:
      "Book a family dental checkup in Bhalwal at Turabi Dentistry for routine care, consultation, and treatment guidance.",
    eyebrow: "Family Dentist",
    heading: "Routine dental care for families in Bhalwal.",
    intro:
      "Family dental visits help patients stay ahead of common concerns through checkups, advice, and clear care recommendations.",
    bullets: [
      "Routine checkups and consultation for everyday dental needs",
      "Guidance for families looking for a dependable local dentist",
      "Clear next steps after inquiry or assessment",
    ],
    ctaLabel: "Book family checkup",
    sitemapPriority: 0.76,
    changeFrequency: "monthly",
  },
  {
    slug: "contact",
    title: "Contact Turabi Dentistry | Dentist Hospital in Bhalwal",
    description:
      "Contact Turabi Dentistry on Imambargah Road, Main Bazar, Bhalwal, 40410. Call or WhatsApp to request an appointment.",
    eyebrow: "Contact",
    heading: "Contact Turabi Dentistry in Bhalwal.",
    intro:
      "Patients can call or send a WhatsApp appointment request to ask about consultations, treatment options, and available timings.",
    bullets: [
      "Located on Imambargah Road, Main Bazar, Bhalwal, 40410",
      "Phone-first appointment and callback workflow",
      "Directions available through Google Maps",
    ],
    ctaLabel: "Request appointment",
    sitemapPriority: 0.8,
    changeFrequency: "monthly",
  },
];

export function getLocalSeoPage(slug: string): LocalSeoPage | undefined {
  return localSeoPages.find((page) => page.slug === slug);
}
