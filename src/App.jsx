import './App.css';
import React from 'react';
import ItemList from './Components/ItemList';
import { useState } from 'react';
import BannerAds from './Components/BannerAds';

function App() {
  const [items, setItems] = useState([])

  function addItems(id) {
    setItems([...items, id])
  }
  return (
    <div className="App">      
      <BannerAds/>
      <ItemList addItems={addItems} />      
    </div>
  );
}

export default App;
