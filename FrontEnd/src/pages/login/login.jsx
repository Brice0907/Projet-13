import './style/login.css';
import { useState } from 'react';
import { userLogin } from "../../service/connexion.js";
import { userProfile } from '../../service/profile.js';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function sending(e) {
        e.preventDefault()
        try {
            const token = await userLogin(username, password)
            const profil = await userProfile(token)
            console.log("C'est le profil", profil);
            console.log(typeof profil);
            if (typeof profil === 'object' && profil !== null) {
                window.location.replace('/profil');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className='main bg-dark'>
        <div className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                <button onClick={sending} className="sign-in-button">Sign In</button>
            </form>
        </div>
    </div>

}