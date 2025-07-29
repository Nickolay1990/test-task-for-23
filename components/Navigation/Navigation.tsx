import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import css from "./Navigation.module.css";

export default function Navigation() {
    const t = useTranslations("Navigation");

    return (
        <nav className={css.nav}>
            <ul>
                <li>
                    <Link href="/">{t("LinkHome")}</Link>
                </li>
                <li>
                    <Link href="/about">{t("LinkAbout")}</Link>
                </li>
            </ul>
        </nav>
    );
}
