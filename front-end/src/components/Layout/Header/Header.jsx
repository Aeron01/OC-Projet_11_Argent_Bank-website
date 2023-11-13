import { Link } from "react-router-dom";
import Logo from "../../../assets/img/argentBankLogo.webp"
import Account from "../../Account/Account";

function Header() {
    return (
        <header>
            <nav className="cont-nav">
                <Link to="/">
                    <img className="logo-header" alt="Logo de Argent Bank" src={Logo}/>
                </Link>

                <Account />

            </nav>
        </header>
    )
}

export default Header