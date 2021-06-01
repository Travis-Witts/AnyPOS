import React, { useContext, useRef } from 'react';
import { Form, Button } from 'react-bulma-components';
import './style.scss';
import { ReactComponent as Chevron } from '../assets/icons/chevron.svg';
import SaleList from '../SaleList';
import { StoreModel } from '../../types/types';
import SaleContext from '../../utils/SaleContext';

const SalesDocket: React.FC = () => {
  const { totalState } = useContext<StoreModel>(SaleContext);
  const gstRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef<HTMLInputElement>(null);
  return (
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
            GST
            <input
              disabled
              type="text"
              value={`$ ${((totalState * 0.1).toFixed(2)).toString()}`}
              className="total-form pay-form"
              ref={gstRef}
            />
          </div>
          <div className="payment-row">
            Total (incl.)
            <input
              disabled
              type="text"
              value={`$ ${((totalState * 1.1).toFixed(2)).toString()}`}
              className="total-form pay-form"
              ref={totalRef}
            />
          </div>
          <Button className="pay-btn" color="success">
            Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalesDocket;
