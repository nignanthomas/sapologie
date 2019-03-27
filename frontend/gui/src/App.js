import React, { Component } from "react";
import { connect } from "react-redux";
import {Switch,Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import * as actions from "./store/actions/auth";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props}></Navbar>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/women" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route component={Default}></Route>
        </Switch>

        <Modal></Modal>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
