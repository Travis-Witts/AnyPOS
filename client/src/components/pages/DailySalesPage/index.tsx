/* eslint-disable prefer-const */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const DailySalesPage: React.FC = () => {
  const [dailyState, setDailyState] = useState(0);
  const [costState, setCostState] = useState(0);
  const [gpState, setGpState] = useState('');
  const [profitState, setProfitState] = useState(0);
  const [taxState, setTaxState] = useState(0);

  const getDailySalesTotal = async () => {
    console.log('hello');
    const dailySales: any = await axios.get<any>('/transaction');
    setDailyState(dailySales.data.totalPrice);
    setCostState(dailySales.data.totalCost);
    setGpState(
      ((dailySales.data.totalPrice / dailySales.data.totalCost) * 100).toFixed(
        2,
      ),
    );
    setProfitState(dailySales.data.totalPrice - dailySales.data.totalCost);
    setTaxState(dailySales.data.totalPrice * 0.1);
  };
  useEffect(() => {
    void getDailySalesTotal();
  }, []);

  return (
    <div className="add-item-container">
      <div className="add-item-header">Daily Sales Analysis</div>
      <NavLink exact to="/profile" className="edit-back-arrow">
        <Arrow className="back-arrow" />
      </NavLink>
      <div className="add-item edit-cards">
        <p className="edit-store-h2">Total Revenue</p>
        <input
          disabled
          className="new-item-input"
          type="text"
          value={`$${dailyState}`}
        />
        <p className="edit-store-h2">Total Cost</p>
        <input
          disabled
          className="new-item-input"
          type="text"
          value={`$${costState}`}
        />
        <p className="edit-store-h2">Total Profit</p>
        <input
          disabled
          className="new-item-input"
          type="text"
          value={`$${profitState}`}
        />
        <p className="edit-store-h2">Gross Profit %</p>
        <input
          disabled
          className="new-item-input"
          type="text"
          value={`${gpState}%`}
        />
        <p className="edit-store-h2">Total Tax</p>
        <input
          disabled
          className="new-item-input"
          type="text"
          value={`$${taxState}`}
        />
      </div>
    </div>
  );
};

export default DailySalesPage;
