import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seth Daup, LLC | Practical Tech Help in Central Nebraska",
  description:
    "Warm, practical technology and business consulting for small businesses, ranches, schools, and nonprofits across Central Nebraska.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
