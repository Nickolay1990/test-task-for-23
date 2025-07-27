import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

interface AboutProps {
    params: Promise<{ locale: string }>;
}

export default function About({ params }: AboutProps) {
    const { locale } = use(params);
    setRequestLocale(locale);
    const t = useTranslations("About");
    return (
        <section>
            <h1>{t("title")}</h1>
            <p>{t("content")}</p>
        </section>
    );
}
