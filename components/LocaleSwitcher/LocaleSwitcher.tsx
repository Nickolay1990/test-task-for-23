"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import css from "./LocaleSwitcher.module.css";

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
        <div className={css.wrapper}>
            <button className={css.button} type="button" onClick={() => switchLocale("en")}>
                {t("en")}
            </button>
            <button className={css.button} type="button" onClick={() => switchLocale("uk")}>
                {t("uk")}
            </button>
        </div>
    );
}
