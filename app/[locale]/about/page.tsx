import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generateMetadataProps } from "@/types/types";
import css from "./page.module.css";

export async function generateMetadata({ params }: generateMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "AboutMetadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://test-task-for-23.vercel.app/en/about`,
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

export default function About() {
    const t = useTranslations("About");
    return (
        <section>
            <h1 className={css.title}>{t("title")}</h1>
            <p>{t("content")}</p>
        </section>
    );
}
