import { useTranslations } from "next-intl" 
import { getTranslations } from "next-intl/server";

type Props = {

  params: Promise<{ locale: string }>;

}

// SEO için Meta Başlık ve Açıklamaları Üreten Bölüm:
export async function generateMetadata( { params }: Props ){

  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Home" });

  const canonicalUrl = locale === "en" ? "https://rafetcelik.com" : `https://rafetcelik.com/${locale}`;

  const ogImageUrl = "https://rafetcelik.com/opengraph_image.png";

  return {

    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        tr: "https://rafetcelik.com/tr",
        en: "https://rafetcelik.com",
      }
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("title")
        }
      ]
    },

    twitter: {

      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImageUrl],

    }


  };

}

export default function HomePage(){

    const t = useTranslations("Home");

    return (

          <div className="">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Rafet Çelik",
                url: "https://rafetcelik.com",
                jobTitle: "Software & R&D Engineer",
                knowsAbout: [
                  "Software Engineer",
                  "Artificial Intelligence",
                  "Autonomous Systems",
                ],
              }),
            }}></script>
            
            {/** Hero Section  */}
            <section className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#003f78ff] dark:text-white">
                {t("first_title")}
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {t("second_title")}
              </h2>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                {t("first_p")}
              </p>
            </section>

            { /** İlgi Alanları */ }
            <section className="pt-24">
              <h2 className="text-2xl border-b md:text-3xl pb-3 font-semibold text-gray-700 dark:text-gray-300">{t("third_title")}</h2>
              <h3 className="text-xl md:text-2xl pt-10 font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path></svg>
                {t("fourth_title")}</h3>
              <p className="pt-4 pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">{t("second_p")}
              </p>
              <br></br>
              <p className="pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              {t("third_p")}
              </p>

              <h3 className="text-xl md:text-2xl pt-10 font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path></svg>
                {t("fifth_title")}
              </h3>
              <p className="pt-4 pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">{t("fourth_p")}
              <br></br>
              </p>
              <p className="pt-4 pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              {t("fifth_p")}
              </p>

              <h3 className="text-xl md:text-2xl pt-10 font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path></svg>
                {t("sixth_title")}
              </h3>

              <p className="pt-4 pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
               {t("sixth_p")}
              </p>
              <br></br>
              <p className="pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
               {t("seventh_p")}
              </p>
              <br></br>
              <p className="pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              {t("eighth_p")}
              </p>
              <br></br>
              <p className="pl-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              {t("nineth_p")}
              </p>
              <br></br>
            </section>

          </div>

    )

}