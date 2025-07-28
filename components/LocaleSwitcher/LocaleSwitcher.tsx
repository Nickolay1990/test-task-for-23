"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Switcher");

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };

    return (
        <div>
            <button type="button" onClick={() => switchLocale("en")}>
                {t("en")}
            </button>
            <button type="button" onClick={() => switchLocale("uk")}>
                {t("uk")}
            </button>
        </div>
    );
}
