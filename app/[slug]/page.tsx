import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight, MapPin, Phone } from "lucide-react";
import { buildWhatsAppUrl, clinic, mapDirectionsUrl, siteUrl } from "../config";
import { getLocalSeoPage, localSeoPages } from "../site-pages";

type LocalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return localSeoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalSeoPage(slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url,
    },
  };
}

export default async function LocalSeoLandingPage({ params }: LocalPageProps) {
  const { slug } = await params;
  const page = getLocalSeoPage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${siteUrl}/${page.slug}`;
  const whatsAppUrl = buildWhatsAppUrl(
    `Hello Turabi Dentistry, I would like to ask about ${page.eyebrow}.`
  );
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: page.eyebrow,
    description: page.description,
    provider: {
      "@id": `${siteUrl}/#dentist`,
    },
    areaServed: {
      "@type": "City",
      name: "Bhalwal",
    },
    url: pageUrl,
  };

  return (
    <main className="seo-page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <header className="seo-page-header">
        <div className="container seo-page-nav">
          <Link className="seo-page-brand" href="/" aria-label="Turabi Dentistry home">
            <Image
              src="/images/logo.png"
              alt="Turabi Dentistry"
              width={2625}
              height={967}
              priority
            />
          </Link>
          <div className="seo-page-actions">
            <a href={`tel:${clinic.phoneE164}`}>
              <Phone size={18} aria-hidden="true" />
              {clinic.phoneDisplay}
            </a>
            <a href={whatsAppUrl} target="_blank" rel="noreferrer">
              <CalendarDays size={18} aria-hidden="true" />
              Book Assessment
            </a>
          </div>
        </div>
      </header>

      <section className="seo-page-hero">
        <div className="container seo-page-grid">
          <div className="seo-page-copy">
            <p className="section-kicker">{page.eyebrow}</p>
            <h1>{page.heading}</h1>
            <p>{page.intro}</p>
            <div className="seo-page-cta-row">
              <a className="button button-primary" href={whatsAppUrl} target="_blank" rel="noreferrer">
                <CalendarDays size={20} aria-hidden="true" />
                {page.ctaLabel}
                <ChevronRight size={19} aria-hidden="true" />
              </a>
              <Link className="button button-ghost" href="/#treatments">
                View treatments
              </Link>
            </div>
          </div>

          <figure className="seo-page-image">
            <Image
              src="/images/treatment-closeup.png"
              alt="Turabi Dentistry treatment planning in Bhalwal"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </figure>
        </div>
      </section>

      <section className="seo-page-details">
        <div className="container seo-page-detail-grid">
          <div className="seo-page-card">
            <h2>What patients can expect</h2>
            <ul>
              {page.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="seo-page-card seo-page-contact-card">
            <h2>Visit Turabi Dentistry</h2>
            <p>{clinic.location}</p>
            <div className="seo-page-card-actions">
              <a className="button button-primary" href={`tel:${clinic.phoneE164}`}>
                <Phone size={19} aria-hidden="true" />
                Call clinic
              </a>
              <a className="button button-outline" href={mapDirectionsUrl} target="_blank" rel="noreferrer">
                <MapPin size={19} aria-hidden="true" />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
