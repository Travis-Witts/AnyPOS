import React, { useRef, useState } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../Icons/cash-register.svg';
import LoginButton from '../LoginButton';
import registerUser from "../../utils/API";

const LoginContainer: React.FC = () => {
  const [loginState, setLoginState] = useState<string | undefined>('');
  // Register info references
  const regEmailRef = useRef<HTMLInputElement>(null);
  const regPasswordRef = useRef<HTMLInputElement>(null);
  const storeInputRef = useRef<HTMLInputElement>(null);
  const userInputRef = useRef<HTMLInputElement>(null);
  // Login info references
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { id } = (event.target as HTMLButtonElement).dataset;
    setLoginState(id);
  };

  const registerHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newUser = {
      name: userInputRef.current?.value,
      email: regEmailRef.current?.value,
      password: regPasswordRef.current?.value,
      storeName: storeInputRef.current?.value
    }
    registerUser(newUser)

  };

  const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const LoginUser = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value
    }
  };

  return (
    <div className="login-container">
      <div className="row">
        <Logo className="mainLogo" />
        <h1 className="title">
          Any<span className="POS-span">POS</span>
        </h1>
      </div>
      <div className="login-row">
        {loginState === '' &&
          ['Register', 'Login'].map(name => (
            <LoginButton onClick={onClickHandler} typeName={name} />
          ))}
        {loginState === 'Login' && (
          <div className="login-col">
            <div>
              <p>Email:</p>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter Your Email"
                ref={emailInputRef}
              />
              <p>Password: </p>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter Your Password"
                ref={passwordInputRef}
              />
            </div>
            <LoginButton onClick={loginHandler} typeName="Login" />
          </div>
        )}
        {loginState === 'Register' && (
          <div>
            <div>
              <p>Store Name:</p>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter Store Name"
                ref={storeInputRef}
              />
              <p>Username:</p>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter User Name"
                ref={userInputRef}
              />
              <p>Email:</p>
              <input
                type="email"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter Your Email"
                ref={regEmailRef}
              />
              <p>Password: </p>
              <input
                type="password"
                className="form-control"
                id="nameInput"
                placeholder="Please Enter Your Password"
                ref={regPasswordRef}
              />
            </div>
            <LoginButton onClick={registerHandler} typeName="Set Up Store" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;