"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BreadCrumb(){

    const t = useTranslations( "Breadcrumb" );

    const pathname = usePathname();

    // URL parçalarını dizilere böl 
    const segments = pathname.split("/").filter( Boolean );

    // Dil Kodunu ( tr, en ) breadcrumb listesinden çıkar ( isteğe bağlı )
    const isLocale = segments[0] === "tr" || segments[0] === "en";

    const pathSegments = isLocale ? segments.slice(1) : segments;

    return (

        <nav aria-label="Breadcrumb" className="my-4 text-sm md:text-base 2xl:text-lg text-gray-500 dark:text-gray-400">
            <ol className="flex items-center gap-2 flex-wrap">
                {/* Ana Sayfa Link */}
                <li>
                    <Link href="/" className="hover:text-[#003f78ff] dark:hover:text-white transition-colors">
                        { t("home") }
                    </Link>
                </li>

                { pathSegments.map( ( segment, index ) => {

                    // Her segment için dinamik href oluştur:
                    const href = "/" + ( isLocale ? `${segments[0]}/` : "") + pathSegments.slice( 0, index + 1 ).join("/"); 

                    const isLast = index === pathSegments.length - 1;

                    // Segment adını düzelt ( r-and-d -> R AND D / about-me -> About Me )
                    const formattedName = t.has( segment ) ? t( segment ) : segment.replace( /-/g, " " ).replace( /\b\w/g, ( char: string ) => char.toUpperCase() );

                    return (

                        <li key={href} className="flex items-center gap-2">
                            {/* Ayraç Ok İkonu */}

                            <span className="text-gray-400">/</span>

                            { isLast ? ( 
                                <span className="font-semibold text-gray-900 dark:text-gray-100" aria-current="page"> {formattedName} </span>
                             ) : (


                                <Link href={href} className="hover:text-[#003f78ff] dark:hover:text-white transition-colors">
                                    {formattedName}
                                </Link>

                             ) }

                        </li>

                    )

                } ) }

            </ol>
        </nav>

    )
}