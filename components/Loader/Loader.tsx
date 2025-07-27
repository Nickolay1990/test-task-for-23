import { BarLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={css.wrapper}>
            <p className={css.loader}>Loading, please wait...</p>
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
