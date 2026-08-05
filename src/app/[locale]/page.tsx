import { useTranslations } from "next-intl" 

export default function HomePage(){

    const t = useTranslations("Home");

    return (

          <div>
            <h1 className="text-3xl font-bold mb-4">{t("portfolio_project")}</h1>
            {/* <ThemeToggle/> */}
          </div>

    )

}