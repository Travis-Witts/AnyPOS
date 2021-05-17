import React from 'react';

const Sale: React.FC = () => (
  <div className="sale-container">
    <div className="sales-row">
      <div className="invoice-col">
        <div className="invoice-header">
          <h1>Invoice lines:</h1>
        </div>
        <div className="current-invoice" />
        <div className="invoice-footer">
          <p># of Items: </p>
          <p>Total: $</p>
          <p>GST: </p>
        </div>
      </div>
      <div className="categories">
        <h1>Category:</h1>
        <div className="select">
          <select name="slct" id="slct">
            <option value="idk">idkasdkljdas</option>
            <option value="idk">idk</option>
            <option value="idk">idk</option>
          </select>
        </div>
        <h1 id="item-text">Item:</h1>
        <div className="select">
          <select name="slct" id="slct">
            <option value="idk">idkasdkljdas</option>
            <option value="idk">idk</option>
            <option value="idk">idk</option>
          </select>
        </div>
        <h1 id="item-text">Discount:</h1>
        <div className="select">
          <select name="slct" id="slct">
            <option value="idk">0%</option>
            <option value="idk">5%</option>
            <option value="idk">10%</option>
          </select>
        </div>
        <h1 id="item-text">Excl. GST:</h1>
        <div className="item-price">
          <div>
            $<span />
          </div>
        </div>
        <h1 id="item-text">Incl. GST:</h1>
        <div className="item-price">
          <div>
            $<span />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sale;
