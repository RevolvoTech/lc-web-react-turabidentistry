import "./globals.css";

export const metadata = {
  title: "Turabi Dentistry | Dentist Hospital in Bhalwal",
  description:
    "Premium dental care, cosmetic dentistry, implants, aligners, and family dentistry in Bhalwal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
