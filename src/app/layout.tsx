import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBlackBanner from "../components/TopBlackBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ecoNutrient",
  description: "Connecting Cultures Through Native Indian Flavours",
  icons: {
    icon: "/Header_Logo_2.png",
  },
  openGraph: {
    title: "ecoNutrient",
    description: "Connecting Cultures Through Native Indian Flavours",
    siteName: "ecoNutrient",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-inter`}
      >
        <TopBlackBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
