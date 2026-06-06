import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import {
  clinic,
  clinicLatitude,
  clinicLongitude,
  clinicServices,
  googleMapsPlusCode,
  mapDirectionsUrl,
  siteUrl,
} from "./config";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Turabi Dentistry | Dentist Hospital in Bhalwal",
  description:
    "Premium dental care, braces, aligners, implants, RCT, bridges, surgery, and full mouth rehabilitation in Bhalwal.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Turabi Dentistry | Dentist Hospital in Bhalwal",
    description:
      "Book braces, aligners, implants, RCT, bridges, surgery, full mouth rehabilitation, and family dental checkups in Bhalwal.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-patient-premium.png",
        width: 1600,
        height: 900,
        alt: "Turabi Dentistry premium clinic experience in Bhalwal",
      },
    ],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#dentist`,
    name: clinic.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: [
      `${siteUrl}/images/hero-patient-premium.png`,
      `${siteUrl}/images/treatment-closeup.png`,
      `${siteUrl}/images/aligner-precision.png`,
    ],
    telephone: clinic.phoneDisplay,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.streetAddress,
      addressLocality: clinic.addressLocality,
      addressRegion: clinic.addressRegion,
      postalCode: clinic.postalCode,
      addressCountry: clinic.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicLatitude,
      longitude: clinicLongitude,
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Google Plus Code",
      value: googleMapsPlusCode,
    },
    areaServed: {
      "@type": "City",
      name: clinic.addressLocality,
      addressRegion: clinic.addressRegion,
      addressCountry: clinic.addressCountry,
    },
    hasMap: mapDirectionsUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: clinic.phoneDisplay,
      contactType: "appointment booking",
      areaServed: clinic.addressCountry,
      availableLanguage: ["English", "Urdu", "Punjabi"],
    },
    medicalSpecialty: [
      "Cosmetic dentistry",
      "Dental implants",
      "Orthodontics",
      "Root canal therapy",
      "Dental bridges",
      "Oral surgery",
      "Full mouth rehabilitation",
    ],
    availableService: clinicServices.map((service) => ({
      "@type": "Service",
      name: service,
      areaServed: clinic.cityLine,
    })),
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
