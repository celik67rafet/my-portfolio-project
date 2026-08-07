import "@/app/globals.css";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin", "latin-ext"],
  variable: "--font-saira",
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode; params: Promise<{ locale: string }>
}) {

  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${saira.className} min-h-screen flex flex-col text-[#003f78ff] dark:text-white bg-white dark:bg-[#003f78ff]`}>
        {children}
      </body>
    </html>
  );
}