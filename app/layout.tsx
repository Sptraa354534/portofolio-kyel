// @ts-nocheck
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyel Rui Saputra Saroinsong — Portfolio",
  description:
    "Portfolio Kyel Rui Saputra Saroinsong — D3 Teknik Informatika, pengembang web full-stack dengan keahlian PHP, MySQL, CodeIgniter, dan Data Analysis.",
  keywords: ["Kyel Saroinsong", "Portfolio", "Web Developer", "PHP", "MySQL", "CodeIgniter", "Palu", "Sulawesi Tengah"],
  openGraph: {
    title: "Kyel Rui Saputra Saroinsong — Portfolio",
    description: "Pengembang web & data analyst dari Palu, Sulawesi Tengah.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-bg text-text-main antialiased">{children}</body>
    </html>
  );
}