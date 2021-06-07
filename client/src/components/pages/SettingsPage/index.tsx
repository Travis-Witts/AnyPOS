/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './style.scss';
import { NavLink } from "react-router-dom";
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Invoice } from '../../assets/icons/invoice.svg';
import { ReactComponent as Add } from '../../assets/icons/add.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Bars } from '../../assets/icons/bars.svg';

const SettingsPage: React.FC = () => {
  const [settingsState, setSettingsState] = useState('');

  return (
    <React.Fragment>
      {!settingsState && (
        <div className="account-container">
          <div className="account-header">Profile Settings</div>
          
            <div className="receipts card-setting">
            <NavLink exact to="/receipts">
              <span className="svg-span">
                <Invoice className="item-svg" />
              </span>
              <p className="card-h2">Receipts</p>
              </NavLink>
            </div>


          <div className="edit-store card-setting">
              <NavLink exact to="/editstore">
            <span>
              <Edit className="item-svg" />
            </span>
            <p className="card-h2">Edit Store</p>
            </NavLink>
          </div>
          <div className="new-items card-setting">
              <NavLink exact to="/additems">
            <span>
              <Add className="item-svg" />
            </span>
            <p className="card-h2">Add New Items</p>
            </NavLink>
          </div>
          <div className="daily-sales card-setting">
              <NavLink exact to="/daily">
            <span>
              <Bars className="item-svg" />
            </span>
            <p className="card-h2">Daily Sales</p>
            </NavLink>
          </div>
          <div className="edit-items card-setting">
              <NavLink exact to="/editstock">
            <span>
              <Pencil className="item-svg" />
            </span>
            <p className="card-h2">Edit Your Stock</p>
            </NavLink>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SettingsPage;
