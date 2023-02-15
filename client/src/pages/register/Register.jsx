import { useRef, useState } from "react"
import "./register.scss"
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const history = useHistory();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) => {
        try {
            e.preventDefault();
            setUsername(usernameRef.current.value);
            setPassword(passwordRef.current.value);
            await axios.post("/auth/register", { email, password, username });
            history.push("/login");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix logo" />
                <Link to="/login" className="link">
                    <button className="loginButton">Sign In</button>
                </Link>
                
            </div>   
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
           {
            !email ? (
            <div className="input">
                <input type="email" placeholder="email address" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ) : (
                <form className="input">
                    <input type="username" placeholder="username" ref={usernameRef} />
                    <input type="password" placeholder="password" ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
            )
           }
            
        </div>
    </div>
  )
}

export default Register