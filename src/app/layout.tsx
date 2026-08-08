import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÖzÜ Aday Öğrenci Portalı",
  description: "Özyeğin Üniversitesi yeni nesil aday öğrenci portalı",
};

import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
