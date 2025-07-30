"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import css from "./error.module.css";

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    const t = useTranslations("Error");
    const router = useRouter();

    setTimeout(() => {
        router.push("/about");
    }, 3000);
    return (
        <div className={css.errorWrapper}>
            <h1 className={css.errorTitle}>{t("title")}</h1>
            <p className={css.errorContent}>{t("content")}</p>
            <p className={css.errorMessage}>{error.message}</p>
        </div>
    );
}
