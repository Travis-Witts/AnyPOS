/* eslint-disable radix */
import React, { useContext, useRef, useState } from 'react';
import { Button } from 'react-bulma-components';
import './style.scss';
import axios from 'axios';
import SaleList from '../SaleList';
import { SaleModel } from '../../types/types';
import SaleContext from '../../context/SaleContext';

const SalesDocket: React.FC = () => {
  const { totalState, saleState, setProducts, setTotal } = useContext<SaleModel>(SaleContext);
  const [discountState, setDiscount] = useState<number>(0);
  const gstRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef<HTMLInputElement>(null);
  const discountRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const discountHandler = () => {
    if (discountRef.current) {
      setDiscount(parseInt(discountRef.current.value));
    }
  };

  const cancelHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setProducts([]);
    setTotal(0);
  }

  const transactionHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    const newTransactionBody = {
      total: totalState,
      discount: discountState,
      stock: saleState
    }
    await axios.post("/transaction/", newTransactionBody)    
  }


  return (
    <div className="transaction-col">
        <div className="invoice-header">
          <h1>New Sale</h1>
        </div>
        <div className="current-invoice">
          <SaleList />
        </div>
        <div className="invoice-footer">
          <div className="payment-row">
            <p>Discount %</p>
            <input
              onChange={discountHandler}
              type="number"
              defaultValue={0}
              className="total-form pay-form"
              ref={discountRef}
            />
          </div>
          <div className="payment-row">
            <p>Email</p>
            <input
              type="email"
              className="total-form pay-form"
              ref={emailRef}
            />
          </div>
          <div className="payment-row">
            GST
            <input
              disabled
              type="text"
              value={`$ ${(totalState * (1 - discountState / 100) * 0.1)
                .toFixed(2)
                .toString()}`}
              className="total-form pay-form"
              ref={gstRef}
            />
          </div>
          <div className="payment-row">
            Total (incl.)
            <input
              disabled
              type="text"
              value={`$ ${(totalState * 1.1 * (1 - discountState / 100))
                .toFixed(2)
                .toString()}`}
              className="total-form pay-form"
              ref={totalRef}
            />
          </div>
          <Button onClick={transactionHandler} className="pay-btn" color="success">
            Pay with Cash
          </Button>
          <Button className="pay-btn" color="info">
            Pay with Stripe
          </Button>
          <Button onClick={cancelHandler} className="pay-btn" color="danger">
            Cancel Order
          </Button>
        </div>
    </div>
  );
};

export default SalesDocket;
