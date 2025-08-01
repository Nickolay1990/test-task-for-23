import { fetchPosts } from "@/lib/api/api";
import Pagination from "../Pagination/Pagination";
import PostListItem from "../PostListItem/PostListItem";
import css from "./PostContent.module.css";

interface PostContentProps {
    page: number;
}

export default async function PostContent({ page }: PostContentProps) {
    const res = await fetchPosts(page);
    const totalCount = Number(res.headers.xTotalCount);
    return (
        <>
            {res && (
                <section>
                    <ul className={css.list}>
                        {res.data.map((post) => (
                            <PostListItem post={post} key={post.id} />
                        ))}
                    </ul>
                    <Pagination totalCount={totalCount} currentPage={Number(page)} />
                </section>
            )}
        </>
    );
}
