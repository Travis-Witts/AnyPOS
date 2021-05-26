import React from 'react';
import './App.scss';
// import Navbar from './components/Navbar';
import LoginContainer from './components/LoginContainer';
// import Sale from './components/Sale';
// import Receipts from './components/Receipts';

const App: React.FC = () => (
  <div className="App">
    {/* <Navbar /> */}
    {/* <div className="main"> */}
    <LoginContainer />
      {/* <Sale /> */}
      {/* <Receipts /> */}
      {/* </div> */}
  </div>
);

export default App;
