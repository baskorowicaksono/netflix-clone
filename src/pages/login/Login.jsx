import React from 'react'
import "./login.scss"

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handler = () => {
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
    }

  return (
    <div className='login'>
        <div className='top'>
            <div className='wrapper'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" 
                alt='netflix-logo'
                className='logo'
                />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email/Phone Number' ref={emailRef} />
                <input type="password" placeholder='Password' ref={passwordRef} />
                <button className='loginButton' onClick={handler}>Sign In</button>
                <span>New to Netflix? <b>Sign up Now!</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're a human. <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login