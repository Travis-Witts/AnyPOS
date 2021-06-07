import React, { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sale from './components/pages/SalePage';
import LoginContainer from './components/LoginContainer';
import EditContainer from './components/EditShopPage';
import { SaleModel } from './types/types';
import SaleContext from './context/SaleContext';
import MobileDocketPage from './components/pages/MobileDocketPage';
import SettingsPage from './components/pages/SettingsPage';

const App: React.FC = () => {
  const [userIdLogin, setLoggedIn] = useState('');
  const [storeIdLogin, setStore] = useState('');
  const [loadingState, setLoading] = useState(false);
  const [saleState, setProducts] = useState([]);
  const [totalState, setTotal] = useState(0);

  const value: SaleModel = {
    saleState,
    setProducts,
    totalState,
    setTotal,
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

          <Route exact path="/edit">
            <EditContainer storeId={storeIdLogin} />
          </Route>

          <Route exact path="/profile">
            <SettingsPage />
          </Route>
        </Switch>
      </Router>
    </div>
    </SaleContext.Provider>
  );
};

export default App;
