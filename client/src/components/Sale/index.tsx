import React from 'react';

const Sale: React.FC = () => (
  <div className="sale-container">
    <div className="sales-row">
      <div className="invoice-col">
          <div className="invoice-header">Invoice lines:</div>
        <div className="current-invoice" />
      </div>
    </div>
  </div>
);

export default Sale;
