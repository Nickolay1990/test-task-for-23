import { fetchPostById, fetchPosts } from "@/lib/api/api";
import { Metadata } from "next";

interface PostDetailsProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const response = await fetchPosts();

    return response.data.map((post) => {
        return { id: String(post.id) };
    });
}

export async function generateMetadata({ params }: PostDetailsProps): Promise<Metadata> {
    const { id } = await params;
    const idNumber = Number(id);

    const post = await fetchPostById(idNumber);

    return {
        title: post.title,
        description: post.body.slice(0, 100),
        openGraph: {
            title: post.title,
            description: post.body.slice(0, 100),
            url: `https://08-zustand-beige.vercel.app/`,
            images: [
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEUeD4nFk4f97q5nfhWnb4YJ0RNbyeci2PA&s",
                    width: 1200,
                    height: 630,
                    alt: "Post Details",
                },
            ],
        },
    };
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
