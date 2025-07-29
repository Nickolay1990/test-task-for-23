import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import css from "./Navigation.module.css";

export default function Navigation() {
    const t = useTranslations("Navigation");

    return (
        <nav>
            <ul className={css.nav}>
                <li>
                    <Link className={css.link} href="/">
                        {t("LinkHome")}
                    </Link>
                </li>
                <li>
                    <Link className={css.link} href="/about">
                        {t("LinkAbout")}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
