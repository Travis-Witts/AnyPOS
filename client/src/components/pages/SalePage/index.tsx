/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import axios from 'axios';
import SalesDocket from '../../SalesDocket';
import ProductCard from '../../ProductCard';
import { IProduct } from '../../../types/types';
import {
  IsDesktopOrLaptop,
  IsTablet
} from '../../../utils/responsiveHooks';

const Sale: React.FC = () => {
  const [cardList, setCards] = useState([]);
  const [searchState, setSearch] = useState([]);

  const searchRef = useRef<HTMLInputElement>(null);

  const getCards = async () => {
    const newProducts = await axios.get('/product');
    setCards(newProducts.data);
    setSearch(newProducts.data);
    console.log(newProducts.data);
  };

  const handleInputChange = () => {
    const matches = cardList.filter(card => {
      const { name }: { name: string } = card;
      if (searchRef.current) {
        const search = searchRef.current.value;
        if (name.includes(search)) {
          return true;
        }
        return false;
      }
    });
    setSearch(matches);
  };

  useEffect(() => {
    void getCards();
  }, []);
  return (
    <React.Fragment>
      {IsDesktopOrLaptop() && (
        <div className="sale-desktop-content">
          <div className="sale-header">
            <h1 className="items-header">Search for an item:</h1>
            <input
              className="sale-search"
              type="text"
              ref={searchRef}
              onChange={handleInputChange}
            />
          </div>
          <div className="main">
            <div className="item-row">
              {searchState.map(
                ({ name, price, quantity, product_id }: IProduct) => (
                  <ProductCard
                    name={name}
                    price={price}
                    quantity={quantity}
                    product_id={product_id}
                    key={product_id}
                  />
                ),
              )}
            </div>
          </div>
          <SalesDocket />
        </div>
      )}
      {IsTablet() && (
        <div className="sale-tablet-content">
          <div className="sale-header">
            <h1 className="items-header">Search for an item:</h1>
            <input
              className="sale-search"
              type="text"
              ref={searchRef}
              onChange={handleInputChange}
            />
          </div>
          <div className="main">
            <div className="item-row">
              {searchState.map(
                ({ name, price, quantity, product_id }: IProduct) => (
                  <ProductCard
                    name={name}
                    price={price}
                    quantity={quantity}
                    product_id={product_id}
                    key={product_id}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sale;
