import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Geral</Link>
                <Link to="/terror">Terror</Link>
                <Link to="/acao">Acao</Link>
                <Link to="/comedia">Comedia</Link>
            </nav>
        </header>
    );
}

export default Header;