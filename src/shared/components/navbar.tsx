"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Navbar(){

    return (

        <header className="w-full shadow-xl bg-white dark:bg-[#003f78ff] lg:px-8 lg:py-4">
            <div className="flex gap-8">

                <Link href="/" className="flex items-center">
            
                    <Image src="/celik_white_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-20 w-auto object-contain hidden dark:block"/>

                    <Image src="/celik_logo.svg" alt="Çelik Logo" width={150} height={40} className="h-20 w-auto object-contain dark:hidden"/>

                </Link>
                <div className="border w-full flex justify-center items-center">HEADER</div>

            </div>
        </header>

    )

}