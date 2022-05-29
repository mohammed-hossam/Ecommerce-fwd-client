import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import ItemList from './Components/ItemList';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])

  function addItems(id) {
    setItems([...items, id])
  }
  return (
    <div className="App">
      <div style={{ position: 'fixed', width: '100vw', zIndex: '1000' }}>
        <ResponsiveAppBar items={items} />
      </div>
      <ItemList addItems={addItems} />
    </div>
  );
}

export default App;
