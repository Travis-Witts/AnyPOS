import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import ReceiptListItem from '../../ReceiptListItem';

const ReceiptPage: React.FC = () => {
  const [receiptState, setReceipts] = useState([]);

  const getReceipts = async () => {
    const receipts = await axios.get("/transaction/all");
    setReceipts(receipts.data)
  }

  useEffect(() => {
    void getReceipts();
  }, [])

  return (
    <div className="edit-items-container">
    <div className="edit-items-header">Your Receipts</div>
    <NavLink exact to="/profile" className="edit-back-arrow">
      <Arrow className="back-arrow" />
    </NavLink>
    <div className="edit-item-card edit-cards">
      <div className="receipt-container">
        <div id="col-edit-name" className="sale-product-col">
          ID
        </div>
        <div id="col-edit-cost" className="sale-product-col">
          Total
        </div>
        <div id="col-edit-price" className="sale-product-col">
          Discount
        </div>
        <div id="col-edit-quantity" className="sale-product-col">
          Date
        </div>
        {receiptState.length ? (
          <React.Fragment>
            {receiptState.map((receipt: any) => (
              <ReceiptListItem
                transaction_id={receipt.transaction_id}
                total={receipt.total}
                discount={receipt.discount}
                createdAt={receipt.createdAt}
              />
            ))}{' '}
          </React.Fragment>
        ) : (
          <h4 className="col-edit-price">No Products to display.</h4>
        )}
      </div>
    </div>
  </div>
  )
};

export default ReceiptPage;