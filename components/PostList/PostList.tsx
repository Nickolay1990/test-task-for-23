import { fetchPosts } from "@/lib/api/api";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";

interface PostListProps {
    page: number;
}

export default async function PostList({ page }: PostListProps) {
    const res = await fetchPosts(page);
    const totalCount = Number(res.headers.xTotalCount);

    return (
        <>
            {res && (
                <section>
                    <ul>
                        {res.data.map((post) => (
                            <li key={post.id}>
                                <h4>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h4>
                                <Link href={`/posts/${post.id}`}>Read more</Link>
                            </li>
                        ))}
                    </ul>
                    <Pagination totalCount={totalCount} currentPage={Number(page)} />
                </section>
            )}
        </>
    );
}
