import './style/header.css'
import Logo from './asset/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const url = location.pathname;

    return <header className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        </Link>
        <div>
            {url === '/profil' ? (<div>
                <Link className="main-nav-item" href="/profil">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link className="main-nav-item" to="/">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>)
                : (<Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle main-nav-item-utilisateur"></i>
                    Sign In
                </Link>)}

        </div>
    </header>
}