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
  metadataBase: new URL("https://ton-domaine.com"),

  title: {
    default: "Komoe Emile | Développeur Fullstack & Cybersécurité",
    template: "%s | Komoe Emile",
  },

  description:
    "Portfolio de Komoe Emile, développeur Fullstack spécialisé en Next.js, TypeScript, NestJS, PostgreSQL et cybersécurité basé à Abidjan, Côte d'Ivoire.",

  applicationName: "Portfolio Komoe Emile",

  keywords: [
    "Komoe Emile",
    "Développeur Fullstack",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Cybersécurité",
    "Portfolio",
    "Développeur Abidjan",
    "Développeur Côte d'Ivoire",
  ],

  authors: [
    {
      name: "Komoe Emile",
    },
  ],

  creator: "Komoe Emile",

  publisher: "Komoe Emile",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ton-domaine.com",
    siteName: "Portfolio Komoe Emile",

    title: "Komoe Emile | Développeur Fullstack",

    description:
      "Développeur Fullstack spécialisé en Next.js, NestJS, PostgreSQL et cybersécurité.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Komoe Emile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Komoe Emile | Développeur Fullstack",
    description:
      "Développeur Fullstack spécialisé en Next.js, NestJS, PostgreSQL et cybersécurité.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}