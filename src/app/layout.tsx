import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DarkRentals — Location de voitures à Montréal | Québec",
    template: "%s | DarkRentals",
  },
  description:
    "Location de voitures abordables à Montréal et partout au Québec. Compactes, berlines, VUS, minibus et camions. Réservez en ligne dès maintenant.",
  metadataBase: new URL("https://darkrentals.com"),
  openGraph: {
    title: "DarkRentals — Location de voitures à Montréal",
    description:
      "Location de voitures abordables à Montréal et partout au Québec.",
    url: "https://darkrentals.com",
    siteName: "DarkRentals",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DarkRentals — Location de voitures à Montréal",
    description:
      "Location de voitures abordables à Montréal et partout au Québec.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}