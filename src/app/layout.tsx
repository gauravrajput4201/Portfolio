import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import SplashCursor from "@/components/SplashCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Singh - Frontend Engineer & Full Stack Developer",
  description: "Gaurav Singh is a passionate Frontend Engineer with 3.5+ years of experience in React.js, Next.js, and TypeScript. Explore my projects, skills, and experience in web development.",
  keywords: "Frontend Engineer, React Developer, Next.js, TypeScript, Web Developer, Full Stack Developer, JavaScript, Portfolio",
  authors: [{ name: "Gaurav Singh", url: "https://gauravsingh.dev" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gauravsingh.dev",
    title: "Gaurav Singh - Frontend Engineer & Full Stack Developer",
    description: "Gaurav Singh is a passionate Frontend Engineer with 3.5+ years of experience in React.js, Next.js, and TypeScript. Explore my projects, skills, and experience in web development.",
    siteName: "Gaurav Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Singh - Frontend Engineer & Full Stack Developer",
    description: "Explore my portfolio and projects",
    creator: "@gaurav_kumar_singh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://gauravsingh.dev",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
        <AnimatedBackground />  
        <SplashCursor />
        <ScrollEffects />
      
        {children}
      </body>
    </html>
  );
}
