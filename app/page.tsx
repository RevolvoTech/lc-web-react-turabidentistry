import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Gem,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
} from "lucide-react";
import LeadForm from "./components/LeadForm";
import { buildWhatsAppUrl, clinic, mapDirectionsUrl, mapEmbedUrl } from "./config";

type Treatment = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

type IconText = {
  icon: LucideIcon;
  label: string;
};

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Review = {
  name: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

type WhatsAppIconProps = {
  size?: number;
};

function WhatsAppIcon({ size = 20 }: WhatsAppIconProps) {
  return (
    <svg
      className="whatsapp-mark"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.6 2.3A7.8 7.8 0 0 0 8 0C3.6 0 .1 3.6.1 7.9c0 1.4.4 2.8 1.1 4L0 16l4.2-1.1a7.9 7.9 0 0 0 3.8 1c4.4 0 7.9-3.6 7.9-7.9 0-2.1-.8-4.1-2.3-5.7ZM8 14.5c-1.2 0-2.3-.3-3.4-.9l-.2-.1-2.5.6.7-2.4-.2-.3a6.5 6.5 0 0 1-1-3.5C1.4 4.3 4.4 1.3 8 1.3c1.8 0 3.4.7 4.7 1.9a6.5 6.5 0 0 1 1.9 4.7c0 3.6-3 6.6-6.6 6.6Zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.4.1l-.6.8c-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.4.1-.5.2-.2.2-.7.7-.7 1.7s.7 1.9.8 2c.1.1 1.4 2.1 3.4 3 .5.2.8.3 1.1.4.5.2.9.1 1.2.1.4-.1 1.2-.5 1.3-.9.2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

const treatments: Treatment[] = [
  {
    title: "Braces",
    description: "Planned orthodontic care for straighter teeth, bite balance, and confident smiles.",
    image: "/images/braces-before-after.png",
    icon: Gem,
  },
  {
    title: "Dental Implants",
    description: "Stable replacement options planned for comfort, function, and confidence.",
    image: "/images/implants-before-after.png",
    icon: ShieldCheck,
  },
  {
    title: "Full Mouth Rehabilitation",
    description: "Comprehensive planning for bite, function, restorations, and long-term oral health.",
    image: "/images/aligners-before-after.png",
    icon: Star,
  },
];

const trustItems: IconText[] = [
  { icon: ShieldCheck, label: "Focused safety protocols" },
  { icon: Gem, label: "Premium materials" },
  { icon: Star, label: "Natural, lasting results" },
];

const mobileTrustItems: IconText[] = [
  { icon: ShieldCheck, label: "Safety protocols" },
  { icon: Gem, label: "Premium materials" },
  { icon: Star, label: "Results" },
];

const processSteps: ProcessStep[] = [
  {
    icon: CalendarDays,
    title: "Book a smile assessment",
    text: "Share your concern and preferred time. The team can confirm availability quickly.",
  },
  {
    icon: HeartPulse,
    title: "Get a clear treatment plan",
    text: "Your dentist explains options, timelines, comfort steps, and expected outcomes.",
  },
  {
    icon: Award,
    title: "Start with confidence",
    text: "Care is planned around aesthetics, function, and long-term oral health.",
  },
];

const reviews: Review[] = [
  {
    name: "Smile Design Patient",
    text: "The consultation felt calm and clear. The team explained the options before recommending treatment.",
  },
  {
    name: "Implant Consultation",
    text: "I understood the full plan, timeline, and care steps before making a decision.",
  },
  {
    name: "Family Checkup",
    text: "Professional environment, easy booking, and a comfortable visit for routine dental care.",
  },
];

const faqs: Faq[] = [
  {
    question: "How soon can I request an appointment?",
    answer: "Use the booking form or WhatsApp button to send your preferred date and time. The clinic team can confirm the nearest available slot.",
  },
  {
    question: "Do you offer cosmetic smile treatments?",
    answer: "Yes. The site currently highlights braces, implants, full mouth rehabilitation, root canal care, and family dental checkups.",
  },
  {
    question: "Will the selected time be sent correctly?",
    answer: "Yes. The form converts the selected calendar date and time into Pakistan time before opening WhatsApp.",
  },
  {
    question: "Can this connect to Supabase later?",
    answer: "Yes. The current flow is frontend-only. Once Supabase credentials are available, appointment requests can also be saved in a database.",
  },
];

export default function Home() {
  const quickWhatsAppUrl = buildWhatsAppUrl(
    "Hello Turabi Dentistry, I would like to book a dental appointment."
  );

  return (
    <main id="top">
      <header className="site-header">
        <div className="top-strip">
          <div className="container strip-inner">
            <p>
              <Sparkles size={18} aria-hidden="true" />
              Premium Dentistry in a Calm Hospital Environment
            </p>
            <div className="mobile-strip-line">
              <a href={`tel:${clinic.phoneE164}`}>
                <Phone size={15} aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
              <span>Book your smile assessment</span>
            </div>
            <div className="strip-contact">
              <a href={`tel:${clinic.phoneE164}`}>
                <Phone size={17} aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
              <span className="strip-address">
                <MapPin size={17} aria-hidden="true" />
                {clinic.location}
              </span>
            </div>
          </div>
        </div>

        <nav className="nav-bar" aria-label="Main navigation">
          <div className="container nav-inner">
            <a className="brand" href="#top" aria-label="Turabi Dentistry home">
              <Image
                className="brand-logo"
                src="/images/logo.png"
                alt="Turabi Dentistry"
                width={2625}
                height={967}
                priority
              />
            </a>

            <div className="nav-links">
              <a href="#about">About Us</a>
              <a href="#treatments">
                Treatments
                <ChevronDown size={15} aria-hidden="true" />
              </a>
              <a href="#results">Smile Gallery</a>
              <a href="#experience">Patient Experience</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>

            <a className="button button-primary nav-cta" href="#consultation">
              <CalendarDays size={19} aria-hidden="true" />
              Book Smile Assessment
            </a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero-patient-premium.png"
          alt="Smiling dental patient in a premium clinic environment"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <p className="eyebrow">
            <Sparkles size={22} aria-hidden="true" />
            Artistry. Precision. Confidence.
          </p>
          <h1>
            Redefine Your <span>Smile</span>
          </h1>
          <div className="hero-rule" />
          <p className="hero-copy">
            Premium dental care in Bhalwal designed around comfort, clarity, and natural-looking results
            that improve your smile and your confidence.
          </p>

          <div className="hero-actions">
            <a className="button button-primary hero-button" href="#consultation">
              <CalendarDays size={22} aria-hidden="true" />
              Book Smile Assessment
              <ChevronRight size={21} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#treatments">
              View Treatments
            </a>
          </div>

          <div className="trust-row" aria-label="Practice highlights">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="trust-item" key={item.label}>
                  <span>
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mobile-hero" aria-label="Turabi Dentistry mobile introduction">
        <div className="mobile-hero-media">
          <Image
            src="/images/hero-patient-premium.png"
            alt="Smiling dental patient in a premium clinic environment"
            fill
            priority
            sizes="100vw"
          />
          <div className="mobile-hero-location">
            <MapPin size={15} aria-hidden="true" />
            Dentist hospital in {clinic.cityLine}
          </div>
        </div>

        <div className="container mobile-hero-content">
          <p className="eyebrow mobile-hero-kicker">
            <Sparkles size={18} aria-hidden="true" />
            Artistry. Precision. Confidence.
          </p>
          <h1>
            Redefine Your <span>Smile</span>
          </h1>
          <p className="mobile-hero-copy">
            Premium dental care in Bhalwal designed around comfort, clarity, and natural-looking results.
          </p>

          <div className="mobile-hero-actions">
            <a className="button button-primary" href="#consultation">
              <CalendarDays size={20} aria-hidden="true" />
              Book Smile Assessment
              <ChevronRight size={19} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#treatments">
              View Treatments
            </a>
          </div>

          <div className="mobile-trust-grid" aria-label="Practice highlights">
            {mobileTrustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="mobile-trust-item" key={item.label}>
                  <span>
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <strong>{item.label}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="treatments-band" id="treatments">
        <div className="container treatment-grid">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <article className="treatment-card" key={treatment.title}>
                <div className="treatment-heading">
                  <span className="treatment-icon">
                    <Icon size={31} aria-hidden="true" />
                  </span>
                  <div>
                    <h2>{treatment.title}</h2>
                    <p>{treatment.description}</p>
                  </div>
                </div>

                <div className="result-image" id="results">
                  <Image
                    src={treatment.image}
                    alt={`${treatment.title} representative before and after smile preview`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  <span className="before-label">Before</span>
                  <span className="after-label">After</span>
                  <span className="result-handle" aria-hidden="true">
                    <ChevronRight size={17} />
                  </span>
                </div>

                <a className="learn-link" href="#consultation">
                  Learn More
                  <ChevronRight size={18} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-split-grid">
          <div className="about-copy-panel">
            <div className="about-grid">
              <div>
                <p className="section-kicker">Dentist hospital in Bhalwal</p>
                <h2>Designed for patients who want clear answers and confident care.</h2>
              </div>
              <p>
                Turabi Dentistry brings cosmetic and general dental care into a calm, professional setting.
                Every appointment is built around understanding the concern first, then recommending care that
                fits the patient&apos;s comfort, timeline, and oral health needs.
              </p>
            </div>

            <div className="stats-grid about-stats-grid">
              <div>
                <strong>01</strong>
                <span>Comfort-first consultation</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Cosmetic and family dentistry</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Clear next steps after inquiry</span>
              </div>
            </div>
          </div>

          <figure className="about-image-frame">
            <Image
              src="/images/aligner-precision.png"
              alt="Clear aligner being prepared inside the Turabi Dentistry clinic"
              fill
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="container experience-split-grid">
          <div className="experience-copy-stack">
            <div className="section-heading experience-heading">
              <p className="section-kicker">Patient Experience</p>
              <h2>A calm path from first message to treatment plan.</h2>
            </div>

            <div className="process-grid process-timeline">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <article className="process-card" key={step.title}>
                    <span>
                      <Icon size={27} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <figure className="experience-image-frame">
            <Image
              src="/images/treatment-closeup.png"
              alt="Turabi Dentistry doctor providing careful dental treatment"
              fill
              sizes="(max-width: 1080px) 100vw, 43vw"
            />
          </figure>
        </div>
      </section>

      <section className="reviews-section" aria-label="Patient feedback">
        <div className="container section-heading">
          <p className="section-kicker">Patient Confidence</p>
          <h2>Built around clarity before treatment begins.</h2>
        </div>
        <div className="container review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars" aria-label="Five star feedback">
                <Star size={17} aria-hidden="true" />
                <Star size={17} aria-hidden="true" />
                <Star size={17} aria-hidden="true" />
                <Star size={17} aria-hidden="true" />
                <Star size={17} aria-hidden="true" />
              </div>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="consultation-section" id="consultation">
        <div className="container consultation-grid">
          <div className="consultation-copy">
            <p className="section-kicker">Book Smile Assessment</p>
            <h2>Request a call back for your dental concern.</h2>
            <p>
              Share your contact details, treatment interest, and preferred appointment time.
              The Turabi Dentistry team can then guide you toward the right consultation.
            </p>
            <div className="consultation-points">
              <span>
                <BadgeCheck size={19} aria-hidden="true" />
                Fast callback workflow
              </span>
              <span>
                <UserRoundCheck size={19} aria-hidden="true" />
                Treatment interest captured
              </span>
              <span>
                <Phone size={19} aria-hidden="true" />
                Phone-first lead details
              </span>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <section className="faq-section" id="faq" aria-label="Common questions">
        <div className="container faq-grid">
          <div>
            <p className="section-kicker">Before You Book</p>
            <h2>Common patient questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Turabi Dentistry, Bhalwal</h2>
            <p>{clinic.location}. Send an appointment inquiry for braces, aligners, implants, RCT, bridges, surgery, full mouth rehabilitation, or a family dental checkup.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={quickWhatsAppUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} />
              WhatsApp Inquiry
            </a>
            <a className="button button-outline" href={`tel:${clinic.phoneE164}`}>
              <Phone size={20} aria-hidden="true" />
              Call Clinic
            </a>
            <a className="button button-outline" href={mapDirectionsUrl} target="_blank" rel="noreferrer">
              <MapPin size={20} aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
        <div className="container map-frame">
          <iframe
            title="Turabi Dentistry location on Google Maps"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-directions-card" href={mapDirectionsUrl} target="_blank" rel="noreferrer">
            <MapPin size={20} aria-hidden="true" />
            <span>
              <strong>Turabi Dentistry</strong>
              <small>{clinic.location}</small>
            </span>
          </a>
        </div>
      </section>

      <a className="whatsapp-float" href={quickWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp inquiry">
        <span>Chat with us on WhatsApp</span>
        <WhatsAppIcon size={34} />
      </a>

      <div className="mobile-action-bar" aria-label="Quick appointment actions">
        <a href={`tel:${clinic.phoneE164}`}>
          <Phone size={18} aria-hidden="true" />
          Call
        </a>
        <a href="#consultation">
          <CalendarDays size={18} aria-hidden="true" />
          Book
        </a>
        <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={18} />
          Chat
        </a>
      </div>
    </main>
  );
}
