import React from 'react';
import {  Button } from 'react-bulma-components';
import './style.scss';
import SalesDocket from '../SalesDocket';
import ProductCard from '../ProductCard';

const arr: number[] = [];

for (let i = 0; i < 20; i += 1) {
  arr.push(i);
}
const Sale: React.FC = () => (
  <div className="main">
    <div className="sale-container">
      <div className="sale-col">
        <h1 className="items-header">Add an item</h1>
        <div className="item-col cols">
          {arr.map(button => (
            <ProductCard id={button}/>
          ))}
        </div>
      </div>
      <SalesDocket />
    </div>
  </div>
);

export default Sale;
