import './App.css';
import React from 'react';
import ItemList from './Components/ItemList';
import BannerAds from './Components/BannerAds';

function App() {
	return (
		<div className='App'>
			<BannerAds />
			<ItemList />
		</div>
	);
}

export default App;
