import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bulma-components';
import axios from 'axios';
import './style.scss'
import ModalContext from '../../context/ModalContext';
import { SaleModel } from '../../types/types';
import SaleContext from '../../context/SaleContext';
import {ReactComponent as Cross} from '../assets/icons/close.svg';

const StripeContainer: React.FC = () => {
    const { isOpen, setOpen } = useContext(ModalContext)
    const { totalState, saleState, setProducts, setTotal, discountState, setDiscount } = useContext<SaleModel>(SaleContext);

  const styles: React.CSSProperties = {
    position: 'fixed',
    bottom: isOpen ? '0' : '-150vh',
    backgroundColor: '#fff',
    borderRadius: '1em',
    width: '100%',
    height: '70%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1031,
  };
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleClick = () => {
    setOpen(false)
  }

  const stripe: any = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const CLIENT_SECRET = await axios.post("/payment", {total: totalState})
    console.log(CLIENT_SECRET)
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(CLIENT_SECRET.data, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });
    console.log(result);
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    }
    const newTransactionBody = {
        total: totalState,
        discount: discountState,
        stock: saleState
      }
      await axios.post("/transaction/", newTransactionBody);
      setProducts([]);
      setTotal(0);
      setDiscount(0);
      setOpen(false);
  };

  return (
    <div className="modal" style={styles}>
        <div className="modal-header-div"><h1 className="modal-header">Payment Form</h1></div>
        <a onClick={handleClick} className="getout"><Cross className="cross" /></a>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Card details
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </label>
        <Button disabled={!stripe} color="info">Pay ${totalState}</Button>
      </form>
    </div>
  );
};

export default StripeContainer;
