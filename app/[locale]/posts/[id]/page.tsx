import { fetchPostById, fetchPosts } from "@/lib/api/api";
import { Metadata } from "next";
import css from "./page.module.css";

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
            url: `https://test-task-for-23.vercel.app/en/posts/1`,
            images: [
                {
                    url: "https://elements-resized.envatousercontent.com/elements-video-cover-images/c9281ff4-b96e-428b-beb3-2d0df6839886/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=e174f28b93f911e52fa867fc7d75d0448864d4b640d905055c6f1a266b76cf07",
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
            <h1 className={css.title}>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h1>
            <p>{post.body}</p>
        </article>
    );
}
