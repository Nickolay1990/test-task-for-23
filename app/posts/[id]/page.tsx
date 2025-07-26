import { fetchPostById, fetchPosts } from "@/lib/api/api";

interface PostDetailsProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const posts = await fetchPosts();
    return posts.map((post) => {
        return { id: String(post.id) };
    });
}

export default async function PostDetails({ params }: PostDetailsProps) {
    const { id } = await params;
    const idNumber = Number(id);

    const post = await fetchPostById(idNumber);

    return (
        <article>
            <h1>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h1>
            <p>{post.body}</p>
        </article>
    );
}
