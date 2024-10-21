import React, { useState } from 'react';
import style from './register.module.css';
import Nav from '../Nav';
import Footer from '../Footer';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLoginSignup = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className={style.Register}>
            <div className={style.container}>
                <div className={style.leftpanel}>
                    <h1>UTSOVA</h1>
                    <p>A BETTER CHOICE FOR YOU</p>
                    {/* Change button text and function based on the isLogin state */}
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </p>
                    <button className={style.primarybutton} onClick={toggleLoginSignup}>
                        {isLogin ? "Sign Up" : "Log In"}
                    </button>
                </div>

                {/* Conditionally rendering Login or Signup form */}
                {isLogin ? <Login toggleForm={toggleLoginSignup} /> : <Signup toggleForm={toggleLoginSignup} />}
            </div>
        </div>
    );
};

const Login = ({ toggleForm }) => {
    return (
        <div>
            <Nav />
            <div className={style.formcontainer}>
                <h2>Log In</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button className={style.primarybutton} type="submit">Log In</button>
                    <div className={style.sociallogin}>
                        <button className={`${style.socialbutton} ${style.facebook}`}>Log in with Facebook</button>
                        <button className={`${style.socialbutton} ${style.google}`}>Log in with Google</button>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    );
};

const Signup = ({ toggleForm }) => {
    return (

        <div>
            <Nav/>
            <div className={style.formcontainer}>
                <h2>Sign Up</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button className={style.primarybutton} type="submit">Sign Up</button>
                    <div className={style.sociallogin}>
                        <button className={`${style.socialbutton} ${style.facebook}`}>Log in with Facebook</button>
                        <button className={`${style.socialbutton} ${style.google}`}>Log in with Google</button>
                    </div>
                </form>

            </div>
            <Footer/>
        </div>

    );
};

export default App;
