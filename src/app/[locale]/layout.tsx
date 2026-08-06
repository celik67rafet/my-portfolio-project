import type { Metadata } from "next";
import { ThemeProvider } from "@/shared/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/shared/components/navbar";
import { SecondNavbar } from "@/shared/components/second-navbar";
import { Footer } from "@/shared/components/footer";

export const metadata: Metadata = {
  title: "Celik",
  description: "Rafet Çelik tarafından geliştirilen yazılım, yapay zeka ve otonom sistemler üzerine Ar-Ge projeleri. Geleceğin Çelik teknolojilerine atılan ilk adımlar."
};

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }>; }>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        {/* Light & Dark Arka Planlar */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/bg_light.png')] dark:hidden"/>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/bg_dark.png')] hidden dark:block"/>

        <Navbar/>

        <SecondNavbar/>

        <main className="flex-1 px-2 py-8 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-32 xl:py-32 2xl:px-56 2xl:py-24">
          {children}
        </main>

        <Footer />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}