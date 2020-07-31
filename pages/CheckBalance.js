import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
class CheckBalance extends Component {

    constructor(props){
        super(props);
        this.state = {
            id :''
        }
    }

    onChangedId = (event) =>{
      this.setState({
          id: event.target.value
      })
    }


    handlerSubmit =(event) =>{

        event.preventDefault()
        const id = this.state.id;
        // console.log(id)
        //  console.log(this.state)


        axios.get('http://192.168.43.217:8080/api/v1/account/'+ id)
        .then(response => {
            console.log(response)
            alert('Your current balance : ' +response.data)
        })
        .catch(error => {
            console.log(error.response)
            alert('Error')
        });

    }
    
    render() {
        return (
            <div>
                 <div className="container">
                <div className="card pl-2 pt-1 pb-1 pr-2 mt-5 " >
                    <div className="jumbotron">
                        <h1 className="display-6">Check Balance</h1>
                    </div>
                        <div className="FormCenter">
                            <form onSubmit={this.handlerSubmit} className="FormFields">
                                <div className="FormField  ">
                                    <label >Id</label>
                                    <input value={this.state.id} onChange={this.onChangedId} type="text" className="form-control "  placeholder="Enter Id" aria-describedby="emailHelp"/>
                                </div>
                               
                                <div>
                                    <Button type="submit"  className="btn btn-success w-50 mt-1">Check Balance</Button>
                                </div>
                            </form>
                        </div>
                </div>
                </div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"></link>
                <div id='root'></div>
            
            </div>
           
                
               
        );
    }
}

export default CheckBalance;
