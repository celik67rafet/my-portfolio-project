import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";


type Props = {

    params: Promise<{ locale: string }>

};


// DİNAMİK SEO METADATA:

export async function generateMetadata({ params }: Props) {

    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "AboutMe" });

    const canonicalUrl = locale === "en" ? "https://rafetcelik.com/about-me" : `https://rafetcelik.com/${locale}/about-me`;

    // paylaşım görseli tam adresi:
    const ogImageUrl = "https://rafetcelik.com/opengraph_image.png";

    return {

        title: t("title"),
        description: t("description"),
        alternates: {

            canonical: canonicalUrl,
            languages: {

                tr: "https://rafetcelik.com/tr/about-me",
                en: "https://rafetcelik.com/about-me",
                "x-default": "https://rafetcelik.com/about-me",

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

            card: "summary_large_image", // Küçük kare yerine geniş yatay kart gösterir,
            title: t("title"),
            description: t("description"),
            images: [ogImageUrl],

        }

    };

}

export default function AboutMe(){
    
    const t = useTranslations( "AboutMe" );

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

            <div className="flex items-center">
                <Image src="/sketch_kid_light.svg" alt="Project Failed Image" width={150} height={40} className="h-90 w-auto dark:hidden"/>
                <Image src="/sketch_kid_dark.svg" alt="Project Failed Image" width={150} height={40} className="h-90 w-auto hidden dark:block"/>
                <p>{t("first_p")}</p>
            </div>

            <div className="flex items-center">
                <p>{t("second_p")}
                </p>
                <Image src="/project_failed_light.svg" alt="Rafet's Childhood" width={150} height={40} className="h-90 w-auto hidden dark:block"/>
                <Image src="/project_failed_dark.svg" alt="Rafet's Childhood" width={150} height={40} className="h-90 w-auto dark:hidden"/>
            </div>

            <div className="flex items-center">
                <Image src="/project_man_light.svg" alt="Project Man" width={150} height={40} className="h-90 w-auto dark:hidden"/>
                <Image src="/project_man_dark.svg" alt="Project Man" width={150} height={40} className="h-90 w-auto hidden dark:block"/>
                <p>{t("third_p")}</p>
            </div>
        </div>
    )


}