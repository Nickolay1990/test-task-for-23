import { Link } from "@/i18n/navigation";

interface PaginationProps {
    totalCount: number;
    currentPage: number;
}

export default function Pagination({ totalCount, currentPage }: PaginationProps) {
    const countPages = Math.ceil(totalCount / 10);
    const renderLinks = [];

    for (let i = 1; i <= countPages; i++) {
        if (currentPage === i) {
            renderLinks.push(<li key={i}>{i}</li>);
            continue;
        }
        renderLinks.push(
            <li key={i}>
                <Link href={`/?page=${i}`}>{i}</Link>
            </li>
        );
    }

    return (
        <div>
            <ul>
                {currentPage > 1 && (
                    <li>
                        <Link href={`/?page=${currentPage - 1}`}>&lt;&lt;</Link>
                    </li>
                )}
                {renderLinks}

                {currentPage * 10 < totalCount && (
                    <li>
                        <Link href={`/?page=${currentPage + 1}`}>&gt;&gt;</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
