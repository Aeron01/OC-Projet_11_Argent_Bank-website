import { Link } from "react-router-dom";
import Logo from "../../../assets/img/argentBankLogo.png"
// importer le style du footer ici
// import Account from "../../Account/Account";

function Header() {
    return (
        <Header>
            <nav className="main-nav">
                <Link to="/">
                    <img className="main-nav-logo-image" alt="Logo de Argent Bank" src={Logo}/>
                </Link>

                {/* <Account /> */}

            </nav>
        </Header>
    )
}

export default Header