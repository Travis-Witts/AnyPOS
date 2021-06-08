import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Button } from 'react-bulma-components';
import axios from 'axios';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const AddItemsPage: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const costRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const onClickHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    const body = {
      name: nameRef.current?.value,
      desc: descRef.current?.value,
      quantity: quantityRef.current?.value,
      cost: costRef.current?.value,
      price: priceRef.current?.value,
    };
    try {
      console.log(body)
      const newItem = await axios.post('/product', body);
      console.log(newItem);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-item-container">
      <div className="add-item-header">Add A New Item</div>
      <NavLink exact to="/profile" className="edit-back-arrow">
        <Arrow className="back-arrow" />
      </NavLink>
      <div className="add-item edit-cards">
        <p className="edit-store-h2">Name</p>
        <input className="new-item-input" type="text" ref={nameRef} />
        <p className="edit-store-h2">Description</p>
        <input className="new-item-input" type="text" ref={descRef} />
        <p className="edit-store-h2">Quantity</p>
        <input className="new-item-input" type="number" ref={quantityRef} />
        <p className="edit-store-h2">Cost</p>
        <input className="new-item-input" type="number" ref={costRef} />
        <p className="edit-store-h2">Price</p>
        <input className="new-item-input" type="number" ref={priceRef} />
        <Button
          onClick={onClickHandler}
          className="new-item-input"
          color="success"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddItemsPage;
