import React from 'react';
import { Button } from 'react-bulma-components';

const arr: number[] = []

for (let i=0; i< 20; i+=1) {
  arr.push(i)
}
const Sale: React.FC = () => (
  <div className="sale-container">
    <div className="item-col">
      <h1 className="items-header">Add an item:</h1>
    {arr.map(button => <Button className="sale-btn" color="success" size="large"><p>Hello</p> <p>There</p></Button>)}
    </div>
    <div className="sales-row">
      <div className="invoice-col">
        <div className="invoice-header">Invoice lines:</div>
        <div className="current-invoice" />
      </div>
    </div>
  </div>
);

export default Sale;
