/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginContainer from './components/LoginContainer';
import Sale from './components/Sale';
import Receipts from './components/Receipts';

const App: React.FC = () => {
  const [userIdLogin, setLoggedIn] = useState('');
  const [storeIdLogin, setStore] = useState('');
  const [loadingState, setLoading] = useState(false);

  const setAuth = async () => {
    setLoading(true);
    console.log('working');
    const userDetails = await axios.get('/user/auth');
    setLoggedIn(userDetails.data.userId);
    setStore(userDetails.data.storeId);
    setLoading(false);
  };

  useEffect(() => {
    setAuth();
  }, []);
  if( loadingState) {
    return (<div className="spinner-container"><ScaleLoader /> </div>)
  }
    if (!userIdLogin) {
      return <LoginContainer setLogin={setLoggedIn} />;
    }
    return (
      <div className="App">
        <Router>
          <Navbar setLogin={setLoggedIn} />
          <Switch>
            <Route path="/sale">
              <Sale />
            </Route>

            <Route path="/receipt">
              <Receipts />
            </Route>
          </Switch>
        </Router>
      </div>
    );
};

export default App;
