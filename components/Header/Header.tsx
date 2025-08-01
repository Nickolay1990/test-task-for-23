import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            <Navigation />
            <LocaleSwitcher />
        </header>
    );
}
