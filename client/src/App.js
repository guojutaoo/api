import React, { Component } from 'react';
import Home from "./components/home";
import './App.css';
import { Provider, connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)