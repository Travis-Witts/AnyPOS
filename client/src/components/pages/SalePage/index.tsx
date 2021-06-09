/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import SalesDocket from '../../SalesDocket';
import ProductCard from '../../ProductCard';
import { newSaleProduct } from '../../../types/types';
import {
  IsDesktopOrLaptop,
  IsTablet
} from '../../../utils/responsiveHooks';
import StripeContainer from '../../StripeContainer';
import ModalContext from '../../../context/ModalContext';

const Sale: React.FC = () => {
  const [cardList, setCards] = useState([]);
  const [searchState, setSearch] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const stripePromise = loadStripe("pk_test_51J056TKarJexioXq6RbfKww72FBUGolmX3ycHTLS0syo11uRU55lF8YNzlUxCcuBOWJSTeNc3GE0NSrh9QrzeoWt006FIKBGDD");

  const modalValue = {
    isOpen,
    setOpen
  }

  const searchRef = useRef<HTMLInputElement>(null);

  const getCards = async () => {
    const newProducts = await axios.get('/product');
    setCards(newProducts.data);
    setSearch(newProducts.data);
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
    <Elements stripe={stripePromise}>
    <ModalContext.Provider value={modalValue}>
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
              {searchState.length ? searchState.map(
                ({ name, cost, price, quantity, product_id }: newSaleProduct) => (
                  <ProductCard
                    name={name}
                    cost={cost}
                    price={price}
                    quantity={quantity}
                    product_id={product_id}
                    key={product_id}
                  />
                ),
              ) : <div />}
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
              {searchState.length && searchState.map(
                ({ name, price, cost, quantity, product_id }: newSaleProduct) => (
                  <ProductCard
                    name={name}
                    price={price}
                    cost={cost}
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
      <StripeContainer />
      </ModalContext.Provider>
      </Elements>
  );
};

export default Sale;
