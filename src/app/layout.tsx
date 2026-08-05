import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/components/theme-provider";
import "./globals.css";
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


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

    return (

        <html lang="tr" suppressHydrationWarning>
          <body className={`${saira.className} min-h-screen flex flex-col text-black dark:text-white`}>
              {/* Ligh Mod Arka Planı */}
              <div className="pointer-events-none fixed inset-0 -z-10 mix-blend-multiply bg-[url('/bg_light.png')] dark:hidden"/>
              <div className="pointer-events-none fixed inset-0 -z-10 mix-blend-multiply bg-[url('/bg_dark.png')] hidden dark:block"/>
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
          </body>
        </html>

    )

}