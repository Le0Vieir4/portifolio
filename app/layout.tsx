import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const title = `${portfolio.name} — ${portfolio.professionalTitle}`;
const description = "Leonardo Vieira Moreira é Software Engineer com foco em Full-Stack Web Development. Conheça Weather.io e outros projetos de web, APIs e dados.";

export const metadata: Metadata = {
  title,
  description,
  ...(portfolio.siteUrl ? { metadataBase: new URL(portfolio.siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
