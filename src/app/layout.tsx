import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/constants";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "claro",
    "internet fixa",
    "fibra",
    "internet móvel",
    "tv por assinatura",
    "planos de celular",
    "4g e 5g",
    "apps",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  robots: "index, follow",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image-1200x630.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="AW-818161064" />
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
