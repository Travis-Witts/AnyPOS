/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import './style.scss';
import { newSaleProduct } from '../../types/types';



const EditProduct: React.FC<newSaleProduct> = ({
  name,
  price,
  quantity,
}: newSaleProduct) => {


  // Product references

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-row" key={name}>
      <div className="item-name">
        <p>{name}</p>
      </div>
      <div className="item-price">
        <input
          className="input-col"
          disabled
          type="text"
          value={price}
        />
      </div>
      <div className="item-quantity">
        <input className="input-col" disabled type="text" value={quantity} />
      </div>
    </div>
  );
};

export default EditProduct;
