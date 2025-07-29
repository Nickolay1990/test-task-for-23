import PostContent from "@/components/PostContent/PostContent";
import { getTranslations } from "next-intl/server";
import css from "./page.module.css";

interface HomeProps {
    searchParams: Promise<{ page: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const { page } = await searchParams;
    const t = await getTranslations("Home");
    const currentPage = Number(page) || 1;
    return (
        <>
            <h1 className={css.title}>{t("title")}</h1>
            <PostContent page={currentPage} />
        </>
    );
}
