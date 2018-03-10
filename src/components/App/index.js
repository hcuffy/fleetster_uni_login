import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };


  }



  render() {
    return ( <div>
      <h1 className="my-header">Carsharing</h1>


    </div> );
  }
}
