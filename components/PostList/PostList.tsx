import { fetchPosts } from "@/lib/api/api";
import Link from "next/link";

export default async function PostList() {
    const posts = await fetchPosts();
    

    return (
        <>
            {posts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h4>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h4>
                            <Link href={`/posts/${post.id}`}>Read more</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
