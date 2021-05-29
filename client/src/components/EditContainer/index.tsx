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
        <div className="product-container-row row">
          <div className="new-product-col col-md-4">
            {' '}
            <h1 className="row">New Product:</h1>
            <div className="product container">
              <div className="row">
                <h3>Name:</h3>{' '}
                <div contentEditable="true" ref={productNameRef}>
                  {' '}
                </div>
              </div>
              <div className="row">
                <h3>Price:</h3>{' '}
                <div contentEditable="true" ref={productPriceRef}>
                  0
                </div>
              </div>
              <div className="row">
                <h3>Quantity:</h3>{' '}
                <div contentEditable="true" ref={productQuantityRef}>
                  0
                </div>
              </div>
              <div className="row">
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
          <div className="product-list-col col-md-4">

            <h1 className="row">Product List: </h1>
              <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
