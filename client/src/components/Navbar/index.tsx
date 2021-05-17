import React from 'react';
import './style.scss';
import { ReactComponent as Login } from '../Icons/login.svg';
import { ReactComponent as Register } from '../Icons/register.svg';
import { ReactComponent as Logout } from '../Icons/logout.svg';
import { ReactComponent as POS } from '../Icons/pos.svg';

const Navbar: React.FC = () => (
  <div className="sidebar">
    <ul className="sidebar-nav">
      <li className="logo">
        <a href="/" className="nav-link">
          <POS className="link-img" />
          <span className="link-text">AnyPOS</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          <Login className="link-img" />
          <span className="link-text">Sign In</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          <Register className="link-img" />
          <span className="link-text">Register</span>
        </a>
      </li>
      <li id="logout" className="nav-item">
        <a href="/" className=" nav-link">
          <Logout className="link-img" />
          <span className="link-text">Logout</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;
