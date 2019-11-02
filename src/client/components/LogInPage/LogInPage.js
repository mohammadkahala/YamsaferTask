import React, { useState } from 'react';
import {connect} from 'react-redux';
import { verifyUser } from '../../redux/actions';
import status from '../../../constants';

const LogInPage = ({ history, registrationStatus, verifyUser }) => {
  const [ emailInput, setEmailInput ] = useState("");
  const [ passwordInput, setPasswordInput ] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    verifyUser(emailInput, passwordInput);
  };

  if (registrationStatus === status.LOGGED_IN)
    history.push('/shopping');

  return (
      <div className="screen">
        <form className="form" onSubmit={handleLogIn}>
          <input
            className="input"
            placeholder="Enter your Email Or User Name"
            value={emailInput}
            onChange={({ target }) => setEmailInput(target.value)}
            type="text"
          />
          <input
            className="input"
            placeholder="Enter your Password"
            value={passwordInput}
            onChange={({ target }) => setPasswordInput(target.value)}
            type="password"
          />
          {
            registrationStatus === status.INVALID_USER &&
            <div className="error" >Wrong Email Or Password</div>
          }
          <button className="button">
            Log In
          </button>
        </form>
      </div>
    )
};

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps, { verifyUser })(LogInPage);