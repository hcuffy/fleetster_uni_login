import React, { Component } from 'react';
import './style.css';
import Register from './register';
import Login from './login';
import Home from './home';
import axios from 'axios';
const url = "http://localhost:3030";

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        disable: true,
        login: false,
        registering: true,
        logged_in: false,
        email: '',
        password: ''
      };

    this.entryChange = this.entryChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
    this.handleLogout = this.handleLogin.bind(this);
  }


  entryChange() {
    let {
      login,
      registering
    } = this.state;

    registering = registering === true ? false : true;

    login = login === true ? false : true;

    this.setState({
      registering, login
    });
  }

  handleChange(event) {
    let {
      email,
      password,
      disable
    } = this.state;

    const name = event.target.name;
    email = name === 'email' ? event.target.value : this.state.email;
    password = name === 'password' ? event.target.value : this.state.password;

    let emailRegx = new RegExp (/(.+)@(.+){2,}\.(.+){2,}/);
    let passRegx = new RegExp(/^[A-Z0-9_-]{6,}$/);
    if(emailRegx.test(email) && passRegx.test(password)){
        disable = false;
      }

    this.setState({
      email,
      password,
      disable
    });
  }

  handleSubmit() {
    const {email,password} = this.state;

    let formData = {
      'username': email,
      'password': password
    }
      axios({
          method: 'post',
          url: url + '/users/signup',
          contentType: 'application/json',
          data: formData,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'
          },
          crossDomain: true,
      }).then(function (res) {
              console.log(res);
          }).catch(function (err) {
                console.log(err);
              });
  }

  loggedIn() {
    let {
      login,
      registering,
      logged_in
    } = this.state;

    login = false;
    registering =  false;
    logged_in = true;

    this.setState({
      login,
      registering,
      logged_in
    });

  }

  handleLogin() {
    const {email,password} = this.state;

    let formData = {
      'username': email,
      'password': password
    }

    axios({
        method: 'post',
        url: url + '/users/signin',
        contentType: 'application/json',
        data: formData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'
        },
        crossDomain: true,
    }).then(function (res) {
          console.log(res)
        }).catch(function (err) {
              console.log(err);
          });
        this.loggedIn();
  }

  loggedOut() {
    let {
      login,
      registering,
      logged_in
    } = this.state;

    login = true;
    registering =  false;
    logged_in = false;

    this.setState({
      login,
      registering,
      logged_in
    });

  }

  handleLogout() {

    axios.get(url + '/users/logout')
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    this.loggedOut();
  }

  render() {

      return ( <div>
        <h1 className = "my-header" > Carsharing
        </h1>
         {this.state.logged_in && <Home
              userInfo={this.state.email}
              handleLogout = {this.handleLogout}
          />}

         {this.state.registering && <Register
             entryChange={this.entryChange}
             handleChange = {this.handleChange}
             handleSubmit = {this.handleSubmit}
             email={this.state.email}
             password={this.state.password}
             disable={this.state.disable}

          />}
         {this.state.login && <Login
           entryChange={this.entryChange}
           handleLogin = {this.handleLogin}
           handleChange = {this.handleChange}
          />}

        </div>
      );
  }

}
