import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
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
    <div className="loginContainer">
      <div className="loginPage ">
        <div className="cover">
          <form
            className="loginForm"
            onSubmit={handleSignInWithEmail}
            action=""
          >
            <h3>Please Log In</h3>
            <input
              className="inputBox"
              onBlur={emailHandle}
              type="email"
              placeholder="email"
            />
            <br />
            <input
              className="inputBox"
              onBlur={passwordHandle}
              type="password"
              placeholder="password"
            />
            <br />
            <input
              className="inputBtn btn btn-danger"
              onClick={handleSignInWithEmail}
              type="button"
              value="Sign In"
            />
            <br />
          </form>
          <input
            onClick={handlePasswordReset}
            className="btn py-3 "
            type="button"
            value="Forget Password"
          />
          <br />
          <p>
            If you are not registered yet ,{' '}
            <Link to="/register">Register Now !</Link>
          </p>

          <button className="googleBtn" onClick={handleGoogleSignIn}>
            {' '}
            <GoogleIcon className="googleIcon mx-1" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
