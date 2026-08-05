import { ThemeToggle } from "@/shared/components/theme-toggle";

export default function HomePage(){

    return (

        <main className="min-h-screen p-8 flex flex-col items-center justify-center transition-colors bg-white text-black dark:bg-gray-900 dark:text-white">
          <h1 className="text-3xl font-bold mb-4">Portfolyo Projesi</h1>
          <ThemeToggle/>
        </main>  

    )

}