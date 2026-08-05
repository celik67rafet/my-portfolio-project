import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/components/theme-provider";
import "./globals.css";


export const metadata: Metadata = {

    title: "Celik",
    description: "Rafet Çelik tarafından geliştirilen yazılım, yapay zeka ve otonom sistemler üzerine Ar-Ge projeleri. Geleceğin Çelik teknolojilerine atılan ilk adımlar."

};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

    return (

        <html lang="tr" suppressHydrationWarning>
          <body>
            <ThemeProvider
            
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange

            >

              {children}

            </ThemeProvider>
          </body>
        </html>

    )

}