import PostList from "@/components/PostList/PostList";

interface HomeProps {
    searchParams: Promise<{ page: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;
    return <PostList page={currentPage} />;
}
