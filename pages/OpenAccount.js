import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
class OpenAccount extends Component {

      constructor(){
          super();
          this.state = {
              id :'',
              phoneNo :'',
              firstName :'',
              lastName :'',
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

      onChangedFirstName =(event) => {
          this.setState({
              firstName : event.target.value
          })
      }

      onChangedLastName =(event) => {
        this.setState({
            lastName : event.target.value
        })
    }

      onChangedBalance =(event) => {
          this.setState({
              balance : event.target.value
          })
      }

      handlerSubmit = (event) => {
          event.preventDefault()
          let data = {
              "id" : this.state.id,
              "balance": this.state.balance,
              "phoneno": this.state.phoneNo,
              "customer" :{
                "id" : this.state.id,
                "phoneno": this.state.phoneNo,
                "firstName" : this.state.firstName,
                "lastName": this.state.lastName
              }
            };
             

          axios.post('http://192.168.43.217:8080/api/v1/account' , data)
            .then( response => {
                console.log(response)
                console.log(response.data)
            //   console.log('Account created successfully!!')
              alert('Account created successfully!!')
              
          })
          .catch(error =>{
              console.log(error.response)
          })
      }
      

    render() {
        return (
            <div className="container">
                <div className="card pl-2 pt-1 pr-2 pb-5 mt-2" >
                    <div className="jumbotron">
                        <h1 className="display-6">Create an Account!</h1>
                    </div>
                        <div className="FormCenter">
                            <form onSubmit={this.handlerSubmit.bind(this)} className="FormFields">
                                <div className="FormField  ">
                                    <label>Id</label>
                                    <input value={this.state.id} onChange={this.onChangedId} type="text" className="form-control "  placeholder="Enter Id" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField  ">
                                    <label >Phone number</label>
                                    <input value={this.state.phoneNo} onChange={this.onChangedPhoneNo} type="text" className="form-control"  placeholder="Enter phone number" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField  ">
                                    <label >First Name</label>
                                    <input value={this.state.firstName} onChange={this.onChangedFirstName} type="text" className="form-control"  placeholder="Enter your first name" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField ">
                                    <label >Last Name</label>
                                    <input value={this.state.lastName} onChange={this.onChangedLastName} type="text" className="form-control"  placeholder="Enter your last name" aria-describedby="emailHelp"/>
                                </div>
                                <div className="FormField ">
                                    <label >Balance</label>
                                    <input value={this.state.balance} onChange={this.onChangedBalance} type="text" className="form-control "  placeholder="Enter balance" aria-describedby="emailHelp"/>
                                </div>
                                <div>
                                    <Button type="submit" className="btn btn-success w-50 mt-1">Open Account</Button>
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

export default OpenAccount;
