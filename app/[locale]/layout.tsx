import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container/Container";
import css from "./page.module.css";
import { generateMetadataProps } from "@/types/types";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: generateMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: `https://test-task-for-23.vercel.app/en`,
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

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <Container>
            <Header />
            <main className={css.main}>{children}</main>
            <Footer />
        </Container>
    );
}
