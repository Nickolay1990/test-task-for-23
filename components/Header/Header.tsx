import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    return (
        <header>
            <Navigation />
            <LocaleSwitcher />
        </header>
    );
}
