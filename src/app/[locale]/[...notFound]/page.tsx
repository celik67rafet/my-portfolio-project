import Link from "next/link";

const translations = {
  tr: {
    title: "Sayfa Bulunamadı",
    description: "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.",
    button: "Ana Sayfaya Dön",
  },
  en: {
    title: "Page Not Found",
    description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    button: "Back to Home",
  },
};

export default async function NotFoundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "tr";
  const t = translations[currentLocale];

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-[#003f78] text-[#003f78] dark:text-white">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">{t.title}</h2>
      <p className="opacity-75 mb-8 max-w-md">{t.description}</p>
      <Link
        href={`/${currentLocale}`}
        className="px-6 py-3 bg-[#003f78] text-white dark:bg-white dark:text-[#003f78] shadow-lg font-medium hover:opacity-90 transition-opacity"
      >
        {t.button}
      </Link>
    </div>
  );
}