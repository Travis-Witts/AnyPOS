import React from 'react';
import './style.scss';

type ButtonProps = {
  typeName: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void
}

const LoginButton: React.FC<ButtonProps> = ({ typeName, onClick } : ButtonProps) => (
  <button onClick={onClick} data-id={typeName} type="button" className="sign-in-btn btns">
    {typeName}
  </button>
);

export default LoginButton;
