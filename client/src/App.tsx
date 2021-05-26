import React, { useRef, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginContainer from './components/LoginContainer';
import Sale from './components/Sale';
import Receipts from './components/Receipts';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState('');

  if (!loggedIn) {
    return <LoginContainer setLogin={setLoggedIn} />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar setLogin={setLoggedIn}/>
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
