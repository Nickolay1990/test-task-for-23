import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generateMetadataProps } from "@/types/types";
import css from "./error.module.css";

export async function generateMetadata({ params }: generateMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "NotFound" });

    return {
        title: t("title"),
        description: `${t("contentBefore")} ${t("contentLink")} ${t("contentAfter")}`,
        openGraph: {
            title: t("title"),
            description: `${t("contentBefore")} ${t("contentLink")} ${t("contentAfter")}`,
            url: `https://test-task-for-23.vercel.app/uk/404`,
            images: [
                {
                    url: "https://elements-resized.envatousercontent.com/elements-video-cover-images/c9281ff4-b96e-428b-beb3-2d0df6839886/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=e174f28b93f911e52fa867fc7d75d0448864d4b640d905055c6f1a266b76cf07",
                    width: 1200,
                    height: 630,
                    alt: t("alt"),
                },
            ],
        },
    };
}

export default function NotFound() {
    const t = useTranslations("NotFound");

    return (
        <div className={css.errorWrapper}>
            <h1 className={css.errorTitle}>{t("title")}</h1>
            <p className={css.errorContent}>
                {t("contentBefore")} <Link href={"/"}>{t("contentLink")}</Link> {t("contentAfter")}
            </p>
        </div>
    );
}
