import React from 'react';
import useFirebase from '../../hook/useFirebase';
import './Login.css';
const Login = () => {

  const {signInWithGoogle} = useFirebase();
  
    return (
        <div id="login-box">
      <div className="left">
        <h1>Sign In</h1>

        <form action="">
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />

          <input type="submit" name="signup_submit" value="Sign me in" />
        </form>
      </div>

      <div className="right">
        <span className="loginwith">Sign in with<br />social network</span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button onClick={signInWithGoogle} className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </div>
    );
};

export default Login;