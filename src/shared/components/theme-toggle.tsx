"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white opacity-50 cursor-not-allowed">
        Yükleniyor...
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white transition-colors"
    >
      Mod Değiştir ({resolvedTheme})
    </button>
  );
}