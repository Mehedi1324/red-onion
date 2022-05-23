import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../SharedComp/Hooks/useAuth';
import '../StyleSheets/Login.css';
const Login = () => {
  const {
    handleGoogleSignIn,
    emailHandle,
    passwordHandle,
    handleSignInWithEmail,
    handlePasswordReset,
  } = useAuth();
  return (
    <div className="loginPage py-5 ">
      <div>
        <form onSubmit={handleSignInWithEmail} action="">
          <input onBlur={emailHandle} type="email" placeholder="email" />
          <br />
          <input
            onBlur={passwordHandle}
            type="password"
            placeholder="password"
          />
          <br />
          <input
            onClick={handleSignInWithEmail}
            type="button"
            value="Sign In"
          />
          <br />
        </form>
        <input
          onClick={handlePasswordReset}
          type="button"
          value="Forget Password"
        />
        <br />

        <Link to="/register">Register Now ?</Link>
        <br />
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
