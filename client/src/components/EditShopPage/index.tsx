/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-sequences */
/* eslint-disable object-shorthand */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import './style.scss';
import axios from 'axios';
import ProductList from '../ProductList';
import ProductContext from '../../utils/ProductContext';
import { IProductEdit } from '../../types/types';



type IEditProps = {
  storeId: string;
}

const EditContainer: React.FC<IEditProps> = ({ storeId }: IEditProps) => {
  const productNameRef = useRef<HTMLDivElement>(null);
  const productPriceRef = useRef<HTMLDivElement>(null);
  const productQuantityRef = useRef<HTMLDivElement>(null);

  const [productState, setProducts] = useState([]);
 
  const value = {
    productsState: productState,
    setProducts: setProducts,
  }

  const newProductHandler = async () => {
    const productBody: IProductEdit = {
      name: productNameRef.current?.innerText,
      price: Number(productPriceRef.current?.innerText),
      quantity: Number(productQuantityRef.current?.innerText),
    };
    await axios.post('/product', productBody);
    const newProducts = await axios.get('/product');
    setProducts(newProducts.data)
  };
  return (
    <ProductContext.Provider value={value}>
      <div className="main">
        <div className="container">
          <div className="product-container-row cols">
            <div className="product-list-col col">
              <h1>Product List: </h1>
              <div className="cols">
                Search for a Product:{' '}
                <input className="input-col" type="text" />
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
    </ProductContext.Provider>
  );
};

export default EditContainer;
