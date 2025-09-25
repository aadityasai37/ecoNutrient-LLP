import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBlackBanner from "../components/TopBlackBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBlackBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
