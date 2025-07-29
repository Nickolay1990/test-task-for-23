import { Link } from "@/i18n/navigation";
import css from "./Pagination.module.css";

interface PaginationProps {
    totalCount: number;
    currentPage: number;
}

export default function Pagination({ totalCount, currentPage }: PaginationProps) {
    const countPages = Math.ceil(totalCount / 10);
    const renderLinks = [];

    for (let i = 1; i <= countPages; i++) {
        if (currentPage === i) {
            renderLinks.push(
                <li className={`${css.active} ${css.item}`} key={i}>
                    {i}
                </li>
            );
            continue;
        }
        renderLinks.push(
            <li className={css.item} key={i}>
                <Link href={`/?page=${i}`}>{i}</Link>
            </li>
        );
    }

    return (
        <div>
            <ul className={css.list}>
                {currentPage > 1 && (
                    <li className={css.item}>
                        <Link href={`/?page=${currentPage - 1}`}>&lt;&lt;</Link>
                    </li>
                )}
                {renderLinks}

                {currentPage * 10 < totalCount && (
                    <li className={css.item}>
                        <Link href={`/?page=${currentPage + 1}`}>&gt;&gt;</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
