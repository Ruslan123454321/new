export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://berestova.kz";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-05-22"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
