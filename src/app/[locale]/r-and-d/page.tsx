import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";


type Props = {

    params: Promise<{ locale: string }>

};

// DİNAMİK SEO METADATA
export async function generateMetadata({ params }: Props) {

    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "RD" });

    const canonicalUrl = locale === "en" ? "https://rafetcelik.com/r-and-d" : `https://rafetcelik.com/${locale}/r-and-d`;

    // paylaşım görseli tam adresi:
    const ogImageUrl = "https://rafetcelik.com/opengraph_image.png";


    return {

        title: t("title"),
        description: t("description"),
        alternates: {

            canonical: canonicalUrl,
            languages: {

                tr: "https://rafetcelik.com/tr/r-and-d",
                en: "https://rafetcelik.com/r-and-d",
                "x-default": "https://rafetcelik.com/r-and-d",

            },

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
            card: "summary_large_image", // Küçük kare yerine geniş yatay kart gösterir
            title: t("title"),
            description: t("description"),
            images: [ogImageUrl],
        }

    };
}

export default function RDPage(){
        
    const t = useTranslations( "RD" );

    return (

            <div>

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

                { /** Google arama motoru için Ar-Ge / Proje Sayfası Şeması  */ }
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context":"https://schema.org",
                            "@type":"CollectionPage",
                            name: t("page_title"),
                            description: t("description"),
                            url: "https://rafetcelik.com/r-and-d",
                            author: {
                                "@type": "Person",
                                name: "Rafet Çelik",
                            },
                        }),
                    }}
                ></script>
                    
                { /** Hero Section */ }
                <section className="flex flex-col gap-5">
                
                    <p className="text-xl md:text-2xl">{t("description")}</p>

                    <article>
                        <h1 className="text-3xl uppercase pt-12 md:pt-24">{t("page_subtitle")}</h1>

                        <p className="pt-4 text-base md:text-lg text-gray-700 dark:text-white leading-relaxed">{t("first_p")}</p>

                        <Image src="/datumnav_screen.png" alt="Project Datumnav Arayüz Görseli" width="1200" height="675" className="w-full h-auto object-cover pt-8" priority/>

                        {/** Görsel Alt Açıklaması */}
                        <figcaption className="p-3 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50">{t("fig")}</figcaption>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 pt-8 pl-5">{t("third_title")}</h2>

                        <div className="pl-5 md:pl-10 pt-3 flex flex-col gap-2">
                            <p>&bull; <strong>{t("strong_first")}</strong> {t("second_p")}</p>
                            <p>&bull; <strong>{t("strong_second")}</strong> {t("third_p")}</p>
                            <p>&bull; <strong>{t("strong_third")}</strong> {t("fourth_p")}</p>
                             <p>&bull; <strong>{t("strong_fourth")}</strong> {t("fifth_p")}</p>
                        </div>

                        <div className="pl-5 md:pl-10 pt-10 flex flex-row gap-2">
                            <strong className="text-red-500 text-lg">Not:</strong>
                            <span className="text-gray-600 dark:text-white text-lg">{t("warning")}</span>
                        </div>
                        <br />
                        <br />
                        <Link className="pl-10 text-xl gap-0 hover:gap-2 transition-all duration-100 flex items-center" href="https://datumnav-demo.rafetcelik.com/" rel="noopener noreferrer" target="_blank">{t("go_demo")}<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path></svg></Link>

                    </article>

                </section>                    

            </div>

    );

}
