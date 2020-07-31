import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
class CashWithdrawal extends Component {

    constructor(){
        super();
        this.state = {
            id :'',
            phoneNo :'',
            balance :''
        }
    }

    onChangedId = (event) =>{
      this.setState({
          id: event.target.value
      })
    }

    onChangedPhoneNo =(event)=> {
        this.setState({
            phoneNo :event.target.value
        })
    }

    onChangedBalance =(event) => {
        this.setState({
            balance : event.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
       const id=this.state.id
        const balance = this.state.balance
        axios.put('http://192.168.43.217:8080/api/v1/account/' + id + '/withdraw/' + balance)
        .then(res => {
            console.log(res)
            alert('Cash Withdrawn Successfully!!')
        })
        .catch(error => {
            console.log(error.res)
            alert('Error')

        })

    }

    
    render() {
        return (
            <div className="container">
                <div className="card pl-2 pt-1 pb-1 pr-2 mt-5  " >
                    <div className="jumbotron">
                        <h1 className="display-6">Cash Withdrawal</h1>
                    </div>
                        <div className="FormCenter">
                            <form onSubmit={this.handlerSubmit.bind(this)} className="FormFields">
                                <div className="FormField  ">
                                    <label>Id</label>
                                    <input value={this.state.id} onChange={this.onChangedId} type="text" className="form-control"  placeholder="Enter Id" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField  ">
                                    <label >Phone number</label>
                                    <input value={this.state.phoneNo} onChange={this.onChangedPhoneNo} type="text" className="form-control"  placeholder="Enter phone number" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField ">
                                    <label >Balance</label>
                                    <input value={this.state.balance} onChange={this.onChangedBalance} type="text" className="form-control"  placeholder="Enter balance" aria-describedby="emailHelp"/>
                                </div>
                                <div>
                                    <Button type="submit" className="btn btn-success w-50 mt-1">Cash Withdraw</Button>
                                </div>
                                
                            </form>
                        </div>
                </div>
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"></link>
                <div id='root'></div>
            </div>
        );
    }
}

export default CashWithdrawal;
