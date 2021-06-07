import React from 'react';
import './style.scss';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { ReactComponent as Logout } from '../assets/icons/logout.svg';
import { ReactComponent as POS } from '../assets/icons/pos.svg';
import { ReactComponent as Tag } from '../assets/icons/tag.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';
import { ReactComponent as List } from '../assets/icons/list.svg';
import { LoginProps } from '../../types/types';
import { IsDesktopOrLaptop } from '../../utils/responsiveHooks'


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
        </li> {!IsDesktopOrLaptop() &&
                <li className="nav-item mobile-display">
                <NavLink to="/sale" className="nav-link">
                  <List className="link-img" />
                  <span className="link-text">Sale Items</span>
                </NavLink>
              </li>
        }

        <li id="store" className="nav-item">
          <NavLink exact to="/profile" className="nav-link">
            <Settings className="link-img" />
            <span className="link-text">Profile</span>
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
