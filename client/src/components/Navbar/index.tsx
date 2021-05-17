import React from 'react';
import './style.scss';
import { ReactComponent as Profile } from '../Icons/profile.svg';
import { ReactComponent as Logout } from '../Icons/logout.svg';
import { ReactComponent as POS } from '../Icons/pos.svg';
import { ReactComponent as Tag } from '../Icons/tag.svg';
import { ReactComponent as Settings } from '../Icons/settings.svg';
import { ReactComponent as List } from '../Icons/list.svg';

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
          <Tag className="link-img" />
          <span className="link-text">New Sale</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          <List className="link-img" />
          <span className="link-text">Edit Stock</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          <Profile className="link-img" />
          <span className="link-text">Profile</span>
        </a>
      </li>
      <li id="settings" className="nav-item">
        <a href="/" className="nav-link">
          <Settings className="link-img" />
          <span className="link-text">Settings</span>
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
