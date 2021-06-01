import React, { useRef, useState } from 'react';
import './style.scss';
import axios, { AxiosResponse } from 'axios';
import { ReactComponent as Logo } from '../assets/icons/cash-register.svg';
import LoginButton from '../LoginButton';
import { LoginProps } from '../../types/types';

const LoginContainer: React.FC<LoginProps> = (Props: LoginProps) => {
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

  const registerHandler = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const newUser = {
      name: userInputRef.current?.value,
      email: regEmailRef.current?.value,
      password: regPasswordRef.current?.value,
      storeName: storeInputRef.current?.value,
    };
    try {
      const registeredUser= await axios.post('/user/', newUser);
      Props.setLogin(registeredUser.data.user.user_id);
    } catch (error) {
      alert("Invalid Details. Please Try Again.")
    }

  };

  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const loginUser = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
    };
    try {
      const loggedUser: any = await axios.post('/user/login', loginUser);
      Props.setLogin(loggedUser.data.user.user_id);
    } catch (error) {
      alert("Incorrect username or Password. Try Again.")
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
            <LoginButton key={name} onClick={onClickHandler} typeName={name} />
          ))}
        {loginState === 'Login' && (
          <div className="login-col">
            <h1>Login:</h1>
            <div>
              <p>Email:</p>
              <input
                type="text"
                className="form-control"
                id="emailLoginInput"
                placeholder="Please Enter Your Email"
                ref={emailInputRef}
              />
              <p>Password: </p>
              <input
                type="password"
                className="form-control"
                id="passwordLoginInput"
                placeholder="Please Enter Your Password"
                ref={passwordInputRef}
              />
            </div>
            <LoginButton onClick={loginHandler} typeName="Login" />
          </div>
        )}
        {loginState === 'Register' && (
          <div>
            <h1>Register:</h1>
            <div>
              <p>Store Name:</p>
              <input
                type="text"
                className="form-control"
                id="storeInput"
                placeholder="Please Enter Store Name"
                ref={storeInputRef}
              />
              <p>Username:</p>
              <input
                type="text"
                className="form-control"
                id="userInput"
                placeholder="Please Enter User Name"
                ref={userInputRef}
              />
              <p>Email:</p>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Please Enter Your Email"
                ref={regEmailRef}
              />
              <p>Password: (8-16 characters) </p>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
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
