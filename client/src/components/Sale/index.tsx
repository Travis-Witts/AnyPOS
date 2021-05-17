import React from 'react';

const Sale: React.FC = () => (
  <div className="sale-container">
    <div className="sales-row">
      <div className="invoice-col">
          <div className="invoice-header">Invoice lines:</div>
        <div className="current-invoice" />
        <div className="invoice-footer">Total:</div>
      </div>
      <div className="sales-btns">
        <button type="submit" className="add">
          Add
        </button>
        <button type="submit" className="add">
          Add
        </button>
        <button type="submit" className="add">
          Add
        </button>
      </div>
    </div>
  </div>
);

export default Sale;
