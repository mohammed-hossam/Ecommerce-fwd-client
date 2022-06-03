import './App.css';
import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import ItemList from './Components/ItemList';
import BottomPage from './Components/BottomPage';
import Box from '@mui/material/Box';
import { useState } from 'react';
import BannerAds from './Components/BannerAds';

function App() {
  const [items, setItems] = useState([])

  function addItems(id) {
    setItems([...items, id])
  }
  return (
    <div className="App">
      <ResponsiveAppBar items={items} />
      <Box sx={{width: '100%',height:'150px',my:"10px"}}></Box>
      <BannerAds/>
      <ItemList addItems={addItems} />
      <BottomPage />
    </div>
  );
}

export default App;
