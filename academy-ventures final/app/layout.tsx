import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academyventures.com"),
  title: "Academy Ventures | Building Systems That Strengthen Communities",
  description:
    "Academy Ventures is a diversified healthcare and strategic development organization focused on integrated senior care, healthcare operations, workforce development, government solutions, and scalable community infrastructure.",
  keywords:
    "healthcare infrastructure, senior care, workforce development, government solutions, public sector healthcare, community infrastructure, Academy Ventures",
  authors: [{ name: "Academy Ventures" }],
  creator: "Academy Ventures",
  publisher: "Academy Ventures",
  openGraph: {
    title: "Academy Ventures | Building Systems That Strengthen Communities",
    description:
      "Healthcare infrastructure, workforce systems, government solutions, and community advancement under one strategic platform.",
    url: "https://academyventures.com",
    siteName: "Academy Ventures",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Ventures",
    description:
      "Building scalable systems for healthcare, workforce, and community advancement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-navy-950`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
