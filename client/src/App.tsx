import React, { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sale from './components/pages/SalePage';
import LoginContainer from './components/LoginContainer';
import { SaleModel, EditModel } from './types/types';
import SaleContext from './context/SaleContext';
import ProductContext from './context/ProductContext';
import MobileDocketPage from './components/pages/MobileDocketPage';
import SettingsPage from './components/pages/SettingsPage';
import EditStorePage from './components/pages/EditStorePage';
import AddItemsPage from './components/pages/AddItemsPage';
import EditStockPage from './components/pages/EditStockPage';
import DailySalesPage from './components/pages/DailySalesPage';

const App: React.FC = () => {
  const [userIdLogin, setLoggedIn] = useState('');
  const [storeIdLogin, setStore] = useState('');
  const [loadingState, setLoading] = useState(false);
  const [saleState, setProducts] = useState([]);
  const [totalState, setTotal] = useState(0);
  const [discountState, setDiscount] = useState(0);
  const [productsEditState, setEditProducts] = useState([])

  const editValue: EditModel = {
    productsEditState,
    setEditProducts
  }

  const value: SaleModel = {
    saleState,
    setProducts,
    totalState,
    setTotal,
    discountState,
    setDiscount
  };

  const setAuth = async () => {
    setLoading(true);
    const userDetails = await axios.get('/user/auth');
    setLoggedIn(userDetails.data.userId);
    setStore(userDetails.data.storeId);
    setLoading(false);
  };

  useEffect(() => {
    void setAuth();
  }, []);
  if (loadingState) {
    return (
      <div className="spinner-container">
        <ScaleLoader />{' '}
      </div>
    );
  }
  if (!userIdLogin) {
    return <LoginContainer setLogin={setLoggedIn} />;
  }
  return (
    <SaleContext.Provider value={value}>
      <ProductContext.Provider value={editValue}>
      <div className="App">
        <Router>
          <Navbar setLogin={setLoggedIn} />
          <Switch>
            <Route exact path="/">
              <Sale />
            </Route>

            <Route exact path="/sale">
              <MobileDocketPage />
            </Route>

            <Route exact path="/receipt"></Route>

            <Route exact path="/editstore">
            <EditStorePage />
            </Route>
            
            <Route exact path="/additems">
              <AddItemsPage />
            </Route>

            <Route exact path="/daily">
              <DailySalesPage />
            </Route>

            <Route exact path="/editstock">
              <EditStockPage />
            </Route>

            <Route exact path="/profile">
              <SettingsPage />
            </Route>
          </Switch>
        </Router>
      </div>
      </ProductContext.Provider>
    </SaleContext.Provider>
  );
};

export default App;
