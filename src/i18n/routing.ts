import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({

    locales: [ "tr", "en" ],
    defaultLocale: "en",

    // Varsayılan dil (en) için URL'e /en eklemez. Sadece tr için /tr ekler.
    localePrefix: "as-needed",
    localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation( routing );