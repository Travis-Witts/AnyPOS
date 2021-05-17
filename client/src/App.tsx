import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LoginContainer from './components/LoginContainer';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <div className="main">
      <LoginContainer />
    </div>
  </div>
);

export default App;
