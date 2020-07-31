import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
   

    render() {
        return (

        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <a className="navbar-brand" href="#"><i class="fas fa-university"></i></a> 

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div >
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <NavLink to="/" class="nav-link">Home <span class="sr-only">(current)</span></NavLink>
                </li>
                
                <li class="nav-item">
                    <NavLink class="nav-link" to="/OpenAccount" >OpenAccount</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/CashDeposit">CashDeposit</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/CashWithdrawal">CashWithdraw</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/CheckBalance">CheckBalance</NavLink>
                </li>
            </ul>
                </div>

                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"></link>
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
                            
                            <div id='root'></div>
                
            </div>
  
        </nav>
            <div className="container text-center ">
                <h1 class="display-3">Digital Banking</h1>
            </div>

    </div>

        );
    }
}

export default Home;
