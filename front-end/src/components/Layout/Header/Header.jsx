import { Link } from "react-router-dom";
import Logo from "../../../assets/img/argentBankLogo.png"
import Account from "../../Account/Account";
// importer le style du footer ici

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/">
                    <img className="main-nav-logo-image" alt="Logo de Argent Bank" src={Logo}/>
                </Link>

                <Account />

            </nav>
        </header>
    )
}

export default Header