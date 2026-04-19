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
  title: "Kotia | Monitoreo Agrícola con IA", 
  description: "Optimiza tus cultivos con datos en tiempo real y análisis inteligente para una productividad sostenible.",
  
  openGraph: {
    title: "Kotia - Centro de Monitoreo Agrícola",
    description: "Transforma tu campo con tecnología de vanguardia. Sensores IoT e Inteligencia Artificial.",
    url: "https://kotia.vercel.app",
    siteName: "Kotia",
    images: [
      {
        url: "https://i.postimg.cc/J0mYtNYV/LOGO-SP.png", 
        width: 1200,
        height: 630,
        alt: "Vista previa de la plataforma Kotia",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}