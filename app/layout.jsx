import "./globals.css";

export const metadata = {
  title: "Berestova accounting | Бухгалтерское сопровождение",
  description:
    "Бухгалтерское сопровождение, налоговые консультации и восстановление учета для малого и среднего бизнеса в Казахстане.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
