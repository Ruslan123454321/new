import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://berestova.kz"),
  title: "Berestova accounting | Бухгалтерские услуги в Алматы",
  description:
    "Бухгалтерское сопровождение ИП и ТОО в Алматы: налоговые консультации, отчетность, декларации, зарплата, первичные документы и восстановление учета.",
  keywords: [
    "бухгалтерское сопровождение",
    "бухгалтерские услуги Алматы",
    "бухгалтерия для ИП",
    "бухгалтерия для ТОО",
    "налоговая консультация",
    "налоговая консультация Алматы",
    "отчетность и декларации",
    "восстановление учета",
    "аутсорсинг бухгалтерии",
    "бухгалтер для бизнеса Казахстан",
    "ведение бухгалтерского учета",
    "сдача налоговой отчетности",
    "расчет зарплаты",
    "первичные документы",
    "бухгалтер Алматы",
    "бухгалтерия Тастак Алматы",
    "Berestova accounting",
  ],
  authors: [{ name: "Berestova accounting" }],
  creator: "Berestova accounting",
  publisher: "Berestova accounting",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Berestova accounting | Бухгалтерские услуги в Алматы",
    description:
      "Бухгалтерское сопровождение ИП и ТОО в Алматы: налоги, отчетность, декларации, зарплата и восстановление учета.",
    locale: "ru_KZ",
    type: "website",
    siteName: "Berestova accounting",
    images: [
      {
        url: "/assets/hero-consulting.png",
        width: 1200,
        height: 630,
        alt: "Бухгалтерское сопровождение Berestova accounting",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
