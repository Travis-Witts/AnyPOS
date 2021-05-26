import React from 'react';
import { Form, Button } from 'react-bulma-components';
import './style.scss';
import SalesDocket from '../SalesDocket';

const arr: number[] = [];

for (let i = 0; i < 20; i += 1) {
  arr.push(i);
}
const Sale: React.FC = () => (
  <div className="main">
    <div className="sale-container">
      <div className="sale-col">
        <h1 className="items-header">Add an item</h1>
        <div className="item-col">
          {arr.map(button => (
            <Button
              id={button.toString()}
              className="sale-btn"
              color="success"
              size="large"
            >
              <p>Hello</p> <p>There</p>
            </Button>
          ))}
        </div>
      </div>
      <SalesDocket />
    </div>
  </div>
);

export default Sale;
