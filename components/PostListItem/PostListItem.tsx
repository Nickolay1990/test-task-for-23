import { Link } from "@/i18n/navigation";
import { Post } from "@/types/types";
import { useTranslations } from "next-intl";

interface PostListItemProps {
    post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
    const t = useTranslations("Post");
    return (
        <li key={post.id}>
            <h4>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h4>
            <Link href={`/posts/${post.id}`}>{t("Button")}</Link>
        </li>
    );
}
