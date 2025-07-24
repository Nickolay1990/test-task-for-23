interface PostDetailsProps {
    params: Promise<{ id: string }>;
}

export default async function PostDetails({ params }: PostDetailsProps) {
    console.log(await params);

    return;
}
