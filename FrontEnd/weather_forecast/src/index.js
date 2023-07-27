import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App/> */}
    {/* <Profile/>
    <Login_page/> */}
    {/* <Dropdown/> */}
    {/* <PaymentPage/> */}
    <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
