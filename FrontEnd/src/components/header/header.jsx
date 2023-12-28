import './style/header.css'
import Logo from './asset/argentBankLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return <header className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        </Link>
        <div>
            {/* Faire un components qui changera selon la page sur laquel on est */}
            <Link className="main-nav-item" to="/sign-in">
                <i className="fa fa-user-circle main-nav-item-utilisateur"></i>
                Sign In
            </Link>
            {/*  */}
        </div>
    </header>
}