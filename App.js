import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import OpenAccount from './pages/OpenAccount';
 import CashDeposit from './pages/CashDeposit';
 import CashWithdrawal from './pages/CashWithdrawal';
 import CheckBalance from './pages/CheckBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        
        <Router>
        
          <Switch>
              <Route path="/OpenAccount" component={OpenAccount} ></Route>
              <Route path="/CashDeposit" component={CashDeposit} ></Route>
              <Route path="/CashWithdrawal" component={CashWithdrawal} ></Route>
              <Route path="/CheckBalance" component={CheckBalance} ></Route>
              <Route path="/" exact component={Home} ></Route>
            </Switch>
        </Router>
          
        <header/>
        
      </header>
    </div>
  );
}

export default App;
