import { Link } from "@/i18n/navigation";
import { Post } from "@/types/types";
import { useTranslations } from "next-intl";
import css from "./PostListItem.module.css";

interface PostListItemProps {
    post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
    const t = useTranslations("Post");
    return (
        <li key={post.id} className={css.item}>
            <h4 className={css.title}>{`${post.title[0].toUpperCase()}${post.title.slice(1)}`}</h4>
            <Link className={css.link} href={`/posts/${post.id}`}>
                {t("Button")}
            </Link>
        </li>
    );
}
