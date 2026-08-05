import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/components/theme-provider";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Saira } from "next/font/google";
import { Navbar } from "@/shared/components/navbar";
import { Footer } from "@/shared/components/footer";

const saira = Saira({
  subsets: [ "latin", "latin-ext" ],
  variable: "--font-saira",
});

export const metadata: Metadata = {

    title: "Celik",
    description: "Rafet Çelik tarafından geliştirilen yazılım, yapay zeka ve otonom sistemler üzerine Ar-Ge projeleri. Geleceğin Çelik teknolojilerine atılan ilk adımlar."

};


export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }>; }>) {

    const { locale } = await params;

    if ( !routing.locales.includes( locale as any ) ){

        notFound();

    }

    const messages = await getMessages();

    return (

        <html lang={locale} suppressHydrationWarning>
          <body className={`${saira.className} min-h-screen flex flex-col text-black dark:text-white`}>
              {/* Ligh Mod Arka Planı */}
              <div className="pointer-events-none fixed inset-0 -z-10 mix-blend-multiply bg-[url('/bg_light.png')] dark:hidden"/>
              <div className="pointer-events-none fixed inset-0 -z-10 mix-blend-multiply bg-[url('/bg_dark.png')] hidden dark:block"/>
              

              <NextIntlClientProvider messages={messages}>

                  <ThemeProvider

                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange

                  >

                    <Navbar/>

                    <main className="flex-1">

                      {children}

                    </main>

                    <Footer/>

                  </ThemeProvider>

              </NextIntlClientProvider>

          </body>
        </html>

    )

}