import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux'
import reducer from "./redux/reducer";
import { Provider } from 'react-redux'
import reduxThunk from "redux-thunk"
import {BrowserRouter} from "react-router-dom"




const loggerMiddleware  = store=>next=>action=>{
const result =next(action)
console.log("Middleware",store.getState());
return result
}


const store= createStore(reducer,applyMiddleware(loggerMiddleware,reduxThunk))
console.log(store.getState(),"condition of the store beforee init")
store.dispatch({type:"asyncAdd"})
store.subscribe(() => {
  console.log(store.getState(),"condition of the store beforee init")})







ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
