import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import MainApp from './Pages/MainApp';
import cartSlice from './Store/cartSlice';
import './index.css';

export const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<MainApp />
	</Provider>,
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
