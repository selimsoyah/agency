import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency - Agentic Digital Infrastructure",
  description: "We design and deploy Agentic Digital Infrastructure for service-based enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-gold selection:text-white`}>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
