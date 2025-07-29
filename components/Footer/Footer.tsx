import { useTranslations } from "next-intl";
import css from "./Footer.module.css";

export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer className={css.footer}>
            <p className={css.footerText}>{t("Copyright")}</p>
        </footer>
    );
}
