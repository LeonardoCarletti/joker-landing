import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joker Wrap Tools | Ferramentas Premium de Envelopamento",
  description: "Ferramentas profissionais de envelopamento automotivo e arquitetônico. Precisão, ergonomia e performance para quem leva o wrapping a outro nível.",
  keywords: ["envelopamento", "wrapping", "ferramentas", "automotivo", "joker", "wrap tools"],
  openGraph: {
    title: "Joker Wrap Tools",
    description: "Ferramentas premium de envelopamento para profissionais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joker Wrap Tools",
    description: "Ferramentas premium de envelopamento para profissionais.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
