import React from 'react';
import { Form, Button } from 'react-bulma-components';
import './style.scss';
import { ReactComponent as Chevron } from '../Icons/chevron.svg';
import SaleList from '../SaleList';

const SalesDocket: React.FC = () => (
  <div className="sales-row">
    <div className="invoice-col">
      <div className="invoice-header">
        <Chevron className="chevron" />
        <h1>New Sale</h1>
      </div>
      <div className="current-invoice container-fluid">
        <SaleList />
      </div>
      <div className="invoice-footer">
      <div className="payment-row">
        <p>Discount %</p>
        <Form.Input className="discount-form" />
      </div>
      <div className="payment-row">
        <p>Email</p>
        <Form.Input className="email-form" />
      </div>
      <div className="payment-row">
        Total $
        <Form.Input
          value="11.00"
          status="focus"
          color="info"
          isStatic
          className="total-form pay-form"
        />
      </div>
      <div className="payment-row">
        GST $
        <Form.Input
          value="1.00"
          status="focus"
          color="info"
          isStatic
          className="gst-form pay-form"
        />
      </div>
      <Button className="pay-btn" color="success">
        Pay
      </Button>
    </div>
    </div>

  </div>
);

export default SalesDocket;
