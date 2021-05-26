import React, { useRef, useState } from 'react';
import './style.scss';
import { Form } from 'react-bulma-components';
import { ReactComponent as Logo } from '../Icons/cash-register.svg';
import LoginButton from '../LoginButton';

const LoginContainer: React.FC = () => {
  const [loginState, setLoginState] = useState<string | undefined>('');
  const regEmailRef = useRef<HTMLInputElement>(null);
  const regPasswordRef = useRef<HTMLInputElement>(null);
  const storeInputRef = useRef<HTMLInputElement>(null);
  const userInputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { id } = (event.target as HTMLButtonElement).dataset;
    setLoginState(id);
  };

  const registerHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const storeName = storeInputRef.current?.value;
    const userName = userInputRef.current?.value;
    const email = regEmailRef.current?.value;
    const password = regPasswordRef.current?.value;
  }

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
            <p>Email:</p>
            <Form.Input />
            <p>Password: </p>
            <Form.Input />
            <LoginButton onClick={onClickHandler} typeName="Login" />
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
