import React from 'react';
import { Form, Button } from 'react-bulma-components';
import './style.scss';
import { ReactComponent as Chevron } from '../Icons/chevron.svg';

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
          <Chevron className="chevron" />
          <h1>New Sale</h1>
        </div>
        <div className="current-invoice" />
        <div className="invoice-footer">
          <div className="payment-row">
            <p>Discount %</p>
            <Form.Input className="discount-form" />
          </div>
          <div className="payment-row">
            Total $
            <Form.Input value="11.00" status="focus" color="info" isStatic className="total-form pay-form" />
          </div>
          <div className="payment-row">
            GST $
            <Form.Input value="1.00" status="focus" color="info" isStatic className="gst-form pay-form" />
          </div>
          <Button className="pay-btn" color="success">
            Pay
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Sale;
