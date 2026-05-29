import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://berestova.kz";
const heroImageUrl = `${siteUrl}/assets/hero-consulting.png`;
const logoImageUrl = `${siteUrl}/assets/logo-pa.png`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Бухгалтерские услуги в Алматы | Ведение ТОО и ИП",
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
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Berestova accounting | Бухгалтерские услуги в Алматы",
    description:
      "Бухгалтерское сопровождение ИП и ТОО в Алматы: налоги, отчетность, декларации, зарплата и восстановление учета.",
    url: "/",
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
  twitter: {
    card: "summary_large_image",
    title: "Бухгалтерские услуги в Алматы | Ведение ТОО и ИП",
    description:
      "Бухгалтерское сопровождение ИП и ТОО в Алматы: налоги, отчетность, декларации, зарплата и восстановление учета.",
    images: ["/assets/hero-consulting.png"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Berestova accounting",
    url: siteUrl,
    image: heroImageUrl,
    logo: logoImageUrl,
    description:
      "Бухгалтерское сопровождение ИП и ТОО в Алматы: налоговые консультации, отчетность, декларации, зарплата, первичные документы и восстановление учета.",
    telephone: "+77776970905",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Тастак 1 дом 11",
      addressLocality: "Алматы",
      addressCountry: "KZ",
    },
    areaServed: {
      "@type": "City",
      name: "Алматы",
    },
    priceRange: "от 18 000₸",
  };

  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
