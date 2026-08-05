"use client";

import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export function Navbar(){

    const t = useTranslations("Navbar");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    // Dil değiştirici fonksiyon ( TR / EN ):
    const toggleLanguage = () => {
        const nextLocale = locale === "tr" ? "en" : "tr";
        const newPath = nextLocale === "tr" 
            ? `/tr${pathname === "/" ? "" : pathname}`
            : (pathname || "/");
        window.location.href = newPath;
    }

    return (

        <header className="w-full z-10 shadow-xl bg-white dark:bg-[#003f78ff] px-4 py-4  md:px-8 md:py-4">
            <div className="flex justify-between md:gap-8">

                <Link href="/" className="flex items-center">
            
                    <Image src="/celik_white_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-12 md:h-20 w-auto object-contain hidden dark:block"/>

                    <Image src="/celik_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-12 md:h-20 w-auto object-contain dark:hidden"/>

                </Link>
                <div className="w-max justify-center items-center gap-8 text-2xl hidden md:flex">
                    <Link className="hover:opacity-60" href="/r&d">{t("r_and_d")}</Link>
                    <Link className="hover:opacity-60" href="/about-me">{t("about_me")}</Link>
                    <Link className="hover:opacity-60" href="/contact">{t("contact")}</Link>
                </div>
                
                <div className="flex">

                    <div className="flex h-max self-center">
                        <button onClick={toggleLanguage} className="px-3 hover:opacity-60 cursor-pointer py-1 font-semibold rounded bg-white dark:bg-[#003f78ff] uppercase text-2xl"> {locale === "tr" ? "EN" : "TR"} </button>
                    </div>
                    <div className="flex h-max self-center">
                        <ThemeToggle></ThemeToggle>
                    </div>

                </div>
                
            </div>
        </header>

    )

}