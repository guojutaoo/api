import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/video-react/dist/video-react.css";

import { Provider, connect } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";


// const mathReducer = (state = {number: 23}, action) => {
//   switch(action.type){
//     case 'ADD':
//       state.number += action.change;
//       break;
//     case 'SUB':
//       state.number -= action.change;
//       break;
//   }
//   return state;
// }

// const userReducer = (state = {user: 'Oliver'}, action) => {
//   switch(action.type){
//     case 'UPDATE':
//       state.user = action.update;
//       break;
//     case 'CHANGE':
//       state.user += action.update;
//       break;
//   }
//   return state;
// }

const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
      case "ADD":
          state = {
              ...state,
              result: state.result + action.payload,
              lastValues: [...state.lastValues, action.payload]
          };
          break;
      case "SUBTRACT":
          state = {
              ...state,
              result: state.result - action.payload,
              lastValues: [...state.lastValues, action.payload]
          };
          break;
  }
  return state;
};

const userReducer = (state = {
  name: "Max",
  age: 27
}, action) => {
  switch (action.type) {
      case "SET_NAME":
          state = {
              ...state,
              name: action.payload
          };
          break;
      case "SET_AGE":
          state = {
              ...state,
              age: action.payload
          };
          break;
  }
  return state;
};

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  // applyMiddleware(logger())
);

store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById("root")
);
