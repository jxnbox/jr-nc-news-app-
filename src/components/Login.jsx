import { Link } from "react-router-dom";
import loginImg from '../images/login.png'

function Login({currentUser, isUserLoggedIn}) {
    return (
        <Link to='/users' id='login'><button id="loginBtn">{isUserLoggedIn ? <img src={currentUser.avatar_url} id='user_loginImg'/> : <img src={loginImg} id='loginImg'/>}</button></Link>
    )
}

export default Login;