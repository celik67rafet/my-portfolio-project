import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {

    params: Promise<{ locale: string }>

};

// DİNAMİK SEO METADATA:

export async function generateMetadata({ params }: Props){

    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "Contact" });

    const canonicalUrl = locale === "en" ? "https://rafetcelik.com/contact" : `https://rafetcelik.com/${locale}/contact`;

    // paylaşım görseli tam adresi:
    const ogImageUrl = "https://rafetcelik.com/opengraph_image.png";

    return {

        title: t("title"),
        description: t("description"),
        alternates: {

            canonical: canonicalUrl,
            languages: {

                tr: "https://rafetcelik.com/tr/contact",
                en: "https://rafetcelik.com/contact",
                "x-default": "https://rafetcelik.com/contact",

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

export default function Contact(){

    const t = useTranslations( "Contact" );

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

           <span>{t("first_p")}</span>
            <div className="flex gap-2">
                <span>{t("phone")}</span>
                <a 
                    href="tel:+905379285727" 
                    className="text-blue-600 hover:underline font-medium"
                >
                    0 537 928 57 27
                </a>
            </div>

            <div className="flex gap-2">
                <span>{t("email")}</span>
                <a 
                    href="mailto:rafet.celikk.07@gmail.com" 
                    className="text-blue-600 hover:underline font-medium"
                >
                    rafet.celikk.07@gmail.com
                </a>
            </div>
            
            <div className="flex items-center justify-center">
                <Image src="/celik_white_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-100 w-auto hidden dark:block"/>
                <Image src="/celik_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-100 w-auto dark:hidden"/>
            </div>
            
        </div>

    )

}