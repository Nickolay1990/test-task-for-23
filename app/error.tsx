"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

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
        <>
            <h1>{t("title")}</h1>
            <p>{t("content")}</p>
            <p>{error.message}</p>
        </>
    );
}
