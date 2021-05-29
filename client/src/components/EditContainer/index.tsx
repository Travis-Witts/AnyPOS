import React from 'react';
import './style.scss';
import axios from 'axios';

const EditContainer: React.FC = () => {
  const a = 'a';
  return (
    <div className="main">
      <div className="product-container-row">
        <div className="new-product-col">
          {' '}
          New Product:
          <div className="product">Hello</div>
        </div>
        <div className="product-list-col">
          Product List:
          <div className="product-list">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
