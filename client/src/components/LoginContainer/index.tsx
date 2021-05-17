import React from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../Icons/cash-register.svg';

const LoginContainer: React.FC = () => (
  <div className="login-container">
    <div className="row">
      <Logo className="mainLogo" />
      <h1 className="title">Any<span className="POS-span">POS</span></h1>
    </div>
    <div className="login-row">
      <button type="submit" className="sign-in-btn btns">
        Sign In
      </button>
    </div>
  </div>
);

export default LoginContainer;
