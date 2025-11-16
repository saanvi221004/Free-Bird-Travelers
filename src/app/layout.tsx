import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import FontPreconnect from "@/components/layout/FontPreconnect";

export const metadata: Metadata = {
  metadataBase: new URL("https://freebirdtravelers.com"),
  title: "Free Bird Travelers - Your Personal Travel Companion | Expert Travel Services",
  description: "Experience personalized travel with Free Bird Travelers. Expert travel planning, custom tour packages, visa assistance, and personal travel guidance for unforgettable journeys. Contact us for your next adventure.",
  keywords: "travel agency, personalized travel, custom tours, travel planning, visa assistance, tour packages, travel services, travel consultant, holiday planning, adventure travel, India travel, international travel",
  authors: [{ name: "Free Bird Travelers" }],
  creator: "Free Bird Travelers",
  publisher: "Free Bird Travelers",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebirdtravelers.com",
    siteName: "Free Bird Travelers",
    title: "Free Bird Travelers - Your Personal Travel Companion",
    description: "Experience personalized travel services with a human touch. Expert travel planning, custom tours, and unforgettable journey experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Bird Travelers - Personalized Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bird Travelers - Your Personal Travel Companion",
    description: "Experience personalized travel services with expert planning and personal guidance for unforgettable journeys.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://freebirdtravelers.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FontPreconnect />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}