import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import SplashCursor from "@/components/SplashCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Singh - Portfolio",
  description: "Welcome to my portfolio! I'm Gaurav Singh, a passionate software developer with expertise in web development, mobile app development. Explore my projects, skills, and experience to see how I can contribute to your next project.",
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
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
