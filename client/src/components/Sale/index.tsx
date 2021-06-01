import React, { useState, useEffect } from 'react';
import './style.scss';
import axios from 'axios';
import SalesDocket from '../SalesDocket';
import ProductCard from '../ProductCard';
import SaleContext from '../../utils/SaleContext';
import { IProduct, SaleModel } from '../../types/types';

const Sale: React.FC = () => {
  const [cardList, setCards] = useState([]);
  const [saleState, setProducts] = useState([]);
  const [totalState, setTotal] = useState(0)
  const value: SaleModel = {
    saleState,
    setProducts,
    totalState,
    setTotal
  };
  const getCards = async () => {
    const newProducts = await axios.get('/product');
    setCards(newProducts.data);
  };

  useEffect(() => {
    void getCards();
  }, []);
  return (
    <SaleContext.Provider value={value}>
      <div className="main">
        <div className="sale-container">
          <div className="sale-col">
            <h1 className="items-header">Add an item</h1>
            <div className="item-col col-md-12">
              {cardList.map(
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
      </div>
    </SaleContext.Provider>
  );
};

export default Sale;
