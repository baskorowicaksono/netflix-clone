import { useContext, useState } from "react"
import { loginCall } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({email, password}, dispatch);
    }
    
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix logo" />
            </div>   
        </div>
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin}>Sign In</button>
                <span>New to Netflix? <b>Sign Up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  )
}

export default Register