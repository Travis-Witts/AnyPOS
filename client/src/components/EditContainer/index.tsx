import React, { useRef, useState } from 'react';
import './style.scss';
import axios from 'axios';
import ProductList from '../ProductList';

type IEditProps = {
  storeId: string;
};

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
};

const EditContainer: React.FC<IEditProps> = ({ storeId }: IEditProps) => {
  const productNameRef = useRef<HTMLDivElement>(null);
  const productPriceRef = useRef<HTMLDivElement>(null);
  const productQuantityRef = useRef<HTMLDivElement>(null);

  const newProductHandler = async () => {
    const productBody: IProduct = {
      name: productNameRef.current?.innerText,
      price: Number(productPriceRef.current?.innerText),
      quantity: Number(productQuantityRef.current?.innerText),
    };
    await axios.post('/product', productBody);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="product-container-row cols">
          <div className="product-list-col col">
            <h1>Product List: </h1>
            <div className="cols">
              Search for a Product: <input className="input-col" type="text" />
            </div>
            <ProductList />
          </div>
          <div className="new-product-col col">
            {' '}
            <h1 className="cols">New Product:</h1>
            <div className="product container">
              <div className="cols">
                <h3>Name:</h3>{' '}
                <div
                  className="product-input"
                  contentEditable="true"
                  ref={productNameRef}
                >
                  {' '}
                </div>
              </div>
              <div className="cols">
                <h3>Price:</h3>{' '}
                <div
                  className="product-input"
                  contentEditable="true"
                  ref={productPriceRef}
                >
                  0
                </div>
              </div>
              <div className="cols">
                <h3>Quantity:</h3>{' '}
                <div
                  className="product-input"
                  contentEditable="true"
                  ref={productQuantityRef}
                >
                  0
                </div>
              </div>
              <div className="cols">
                <button
                  onClick={newProductHandler}
                  type="submit"
                  className="new-product btn btn-outline-dark"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
