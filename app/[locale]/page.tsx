import PostContent from "@/components/PostContent/PostContent";

interface HomeProps {
    searchParams: Promise<{ page: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;
    return <PostContent page={currentPage} />;
}
