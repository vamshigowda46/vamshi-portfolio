import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Vamshi Gowda — AI/ML Undergraduate",
  description:
    "AI/ML undergraduate building practical intelligent systems and full-stack applications using Python, React, Flask, Generative AI, and MySQL.",
  keywords: [
    "Vamshi Gowda",
    "AI/ML Undergraduate",
    "Full-Stack AI Developer",
    "Portfolio",
    "Bengaluru",
  ],
  openGraph: {
    title: "Vamshi Gowda — AI/ML Undergraduate",
    description:
      "AI/ML undergraduate building practical intelligent systems and full-stack applications.",
    url: "https://example.com",
    siteName: "Vamshi Gowda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamshi Gowda — AI/ML Undergraduate",
    description:
      "AI/ML undergraduate building practical intelligent systems and full-stack applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
