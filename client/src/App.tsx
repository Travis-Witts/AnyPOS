import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
// import LoginContainer from './components/LoginContainer';
import Sale from './components/Sale';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    {/* <LoginContainer /> */}
    <div className="main">
      <Sale />
      </div>
  </div>
);

export default App;
