import React from 'react';
import { Form, Button } from 'react-bulma-components';
import './style.scss';

const arr: number[] = [];

for (let i = 0; i < 20; i += 1) {
  arr.push(i);
}
const Sale: React.FC = () => (
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
    <div className="sales-row">
      <div className="invoice-col">
        <div className="invoice-header">
          <h1>New Sale</h1>
        </div>
        <div className="current-invoice" />
        <div className="invoice-footer">
        <div className="payment-row">
              Total $
              <Form.Input className="total-form" />
              </div>
          <div className="payment-row">
              GST $
              <Form.Input className="gst-form" />
              </div>
          <div className="payment-row">
              <p>Discount %</p>
              <Form.Input className="discount-form" />
              </div>
            <Button className="pay-btn" inverted color="success">
              Pay
            </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Sale;
