import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface generateMetadataProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: generateMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "NotFound" });

    return {
        title: t("title"),
        description: `${t("contentBefore")} ${t("contentLink")} ${t("contentAfter")}`,
        openGraph: {
            title: t("title"),
            description: `${t("contentBefore")} ${t("contentLink")} ${t("contentAfter")}`,
            url: `https://08-zustand-beige.vercel.app`,
            images: [
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEUeD4nFk4f97q5nfhWnb4YJ0RNbyeci2PA&s",
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
        <>
            <h1>{t("title")}</h1>
            <p>
                {t("contentBefore")} <Link href={"/"}>{t("contentLink")}</Link> {t("contentAfter")}
            </p>
        </>
    );
}
