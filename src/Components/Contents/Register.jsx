import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../SharedComp/Hooks/useAuth';
import '../StyleSheets/Register.css';
const Register = () => {
  const { nameHandle, emailHandle, passwordHandle, handleSignUp } = useAuth();
  return (
    <div>
      <div className="registerPage py-5 ">
        <div className="reg_container">
          <form onSubmit={handleSignUp} action="">
            <input onBlur={nameHandle} type="text" placeholder="Full name" />
            <br />
            <input onBlur={emailHandle} type="email" placeholder="email" />
            <br />
            <input
              onBlur={passwordHandle}
              type="password"
              placeholder="password"
            />
            <br />

            <input onClick={handleSignUp} type="button" value="Sign Up" />
          </form>
          <Link to="/Login">Already Registered ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
