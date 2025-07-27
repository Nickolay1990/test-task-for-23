"use client";

import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navigation() {
    const { locale } = useParams();
    const t = useTranslations("Navigation");

    return (
        <nav>
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
