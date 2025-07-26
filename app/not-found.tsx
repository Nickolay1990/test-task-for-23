import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Oops! Page Not Found</h1>
            <p>
                We`re sorry, but the page you`re looking for doesn`t exist. It might have been removed, renamed, or is temporarily
                unavailable. Please check the URL for mistakes, or go back to the <Link href={"/"}>homepage</Link> to continue
                browsing.
            </p>
        </>
    );
}
