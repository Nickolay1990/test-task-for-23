import { BarLoader } from "react-spinners";
import css from "./Loader.module.css";
import { useTranslations } from "next-intl";

export default function Loader() {
    const t = useTranslations("Loader");
    return (
        <div className={css.wrapper}>
            <p className={css.loader}>{t("title")}</p>
            <BarLoader
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    backgroundColor: "red",
                    width: "500px",
                }}
            />
        </div>
    );
}
