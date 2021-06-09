import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';
import axios from 'axios';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const EditStorePage: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const [nameState, setName] = useState("");
  const [descState, setDesc] = useState("");

  const handleClick = async (event: React.MouseEvent) => {
    const body = { name: nameRef.current?.value, description: descRef.current?.value};
    const updatedStore = await axios.put("/store", body);
    alert("Store has been updated successfully!")
  }

  const getDetails = async () => {
    const storeDetails = await axios.get("/store");
    setDesc(storeDetails.data.description);
    setName(storeDetails.data.name);
  }

  useEffect(() => {
      void getDetails()
  }, [])

  
  return (
    <div className="edit-store-container">
      <div className="edit-store-header">Edit Store</div>
      <NavLink exact to="/profile" className="edit-back-arrow">
        <Arrow className="back-arrow" />
      </NavLink>
      <div className="edit-name edit-cards">
        <p className="edit-store-h2">Edit Name</p>
        <input className="new-item-input" type="text" defaultValue={nameState} ref={nameRef} />
        <p className="edit-store-h2">Edit Description</p>
        <input className="new-item-input" type="text" defaultValue={descState} ref={descRef} />
        <Button onClick={handleClick} className="new-item-input" color="success">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditStorePage;
