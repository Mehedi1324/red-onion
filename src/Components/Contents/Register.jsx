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
          <div className="cover">
            <form className="regiForm" onSubmit={handleSignUp} action="">
              <h3>Please Register</h3>
              <input
                className="regiInput"
                onBlur={nameHandle}
                type="text"
                placeholder="Full name"
              />
              <br />
              <input
                className="regiInput"
                onBlur={emailHandle}
                type="email"
                placeholder="email"
              />
              <br />
              <input
                className="regiInput"
                onBlur={passwordHandle}
                type="password"
                placeholder="password"
              />
              <br />

              <input
                className="regiBtn btn btn-danger"
                onClick={handleSignUp}
                type="button"
                value="Register"
              />
            </form>
            <div className="my-4">
              {' '}
              <Link to="/Login">Already Registered ?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
