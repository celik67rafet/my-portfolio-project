"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export function SecondNavbar(){

    const t = useTranslations("Navbar");

    return (

        <div className="border flex justify-between md:hidden px-12 py-3 sm:px-24 sm:py-6 text-xl text-[#003f78ff] dark:bg-white">
            <Link href="/r&d">{t("r_and_d")}</Link>
            <Link href="/about-me">{t("about_me")}</Link>
            <Link href="/contact">{t("contact")}</Link>
        </div>

    );

}