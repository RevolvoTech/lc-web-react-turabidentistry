import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { clinic } from "./config";

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
  title: "Turabi Dentistry | Dentist Hospital in Bhalwal",
  description:
    "Premium dental care, braces, aligners, implants, RCT, bridges, surgery, and full mouth rehabilitation in Bhalwal.",
  openGraph: {
    title: "Turabi Dentistry | Dentist Hospital in Bhalwal",
    description:
      "Book braces, aligners, implants, RCT, bridges, surgery, full mouth rehabilitation, and family dental checkups in Bhalwal.",
    type: "website",
    url: "https://turabi-dentistry.vercel.app",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

type DentistSchema = {
  "@context": "https://schema.org";
  "@type": "Dentist";
  name: string;
  address: string;
  telephone: string;
  areaServed: string;
  url: string;
  medicalSpecialty: string[];
};

export default function RootLayout({ children }: RootLayoutProps) {
  const localBusinessSchema: DentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    address: clinic.address,
    telephone: clinic.phoneDisplay,
    areaServed: clinic.cityLine,
    url: "https://turabi-dentistry.vercel.app",
    medicalSpecialty: [
      "Cosmetic dentistry",
      "Dental implants",
      "Orthodontics",
      "Root canal therapy",
      "Dental bridges",
      "Oral surgery",
      "Full mouth rehabilitation",
    ],
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
