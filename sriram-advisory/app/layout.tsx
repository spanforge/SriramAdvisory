import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sriram Advisory | Future of Work Research and Advisory",
  description:
    "Sriram Advisory studies how work is changing across technology, AI, automation, careers, skills, leadership, and organizations.",
  icons: {
    icon: "/sriram.png",
    apple: "/sriram.png",
  },
  openGraph: {
    title: "Sriram Advisory | Future of Work Research and Advisory",
    description:
      "Future of Work intelligence for professionals and organizations.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow users to zoom up to 5x (WCAG 1.4.4)
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
