import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kargomok | Akıllı Kargo Yönetim Platformu",
  description: "Tüm operasyonunuzu tek ekrandan yönetin. Gönderilerinizi saniyeler içinde oluşturun, gerçek zamanlı takip edin ve maliyetlerinizi analiz edin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
