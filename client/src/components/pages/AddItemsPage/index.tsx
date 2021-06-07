import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

const AddItemsPage: React.FC = () => {
  const a = 1;
  return (
    <div className="add-item-container">
      <div className="add-item-header">Add A New Item</div>
      <NavLink exact to="/profile" className="edit-back-arrow">
        <Arrow className="back-arrow" />
      </NavLink>
      <div className="add-item edit-cards">
        <p className="edit-store-h2">Name</p>
        <p className="edit-store-h2">Description</p>
        <p className="edit-store-h2">Cost</p>
        <p className="edit-store-h2">Price</p>
      </div>
    </div>
  );
};

export default AddItemsPage;
