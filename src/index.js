import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import MainApp from './Pages/MainApp';
import cartSlice from './Store/cartSlice';
import toastSlice from './Store/toastSlice';
import messageSlice from './Store/messageSlice';
import authSlice from './Store/authSlice';
import './index.css';
import Toast from './Components/Toast';


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    toast: toastSlice,
    auth: authSlice,
    message: messageSlice
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
      <Toast/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
