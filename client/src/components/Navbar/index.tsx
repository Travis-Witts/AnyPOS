import React from 'react';
import './style.scss';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { ReactComponent as Profile } from '../Icons/profile.svg';
import { ReactComponent as Logout } from '../Icons/logout.svg';
import { ReactComponent as POS } from '../Icons/pos.svg';
import { ReactComponent as Tag } from '../Icons/tag.svg';
import { ReactComponent as Settings } from '../Icons/settings.svg';
import { ReactComponent as List } from '../Icons/list.svg';

type LoginProps = {
  setLogin: (value: string) => void;
}


const Navbar: React.FC<LoginProps> = (Props: LoginProps) => {
  const logoutHandler = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await axios.post('/user/logout');
    Props.setLogin('')
  };
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="logo">
          <a href="/" className="nav-link">
            <POS className="link-img" />
            <span className="link-text">AnyPOS</span>
          </a>
        </li>
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            <Tag className="link-img" />
            <span className="link-text">New Sale</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/receipt" className="nav-link">
            <List className="link-img" />
            <span className="link-text">Receipts</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/profile" className="nav-link">
            <Profile className="link-img" />
            <span className="link-text">Profile</span>
          </NavLink>
        </li>
        <li id="settings" className="nav-item">
          <NavLink exact to="/settings" className="nav-link">
            <Settings className="link-img" />
            <span className="link-text">Settings</span>
          </NavLink>
        </li>
        <li id="logout" className="nav-item">
          <a href="/" onClick={logoutHandler} className=" nav-link">
            <Logout className="link-img" />
            <span className="link-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
