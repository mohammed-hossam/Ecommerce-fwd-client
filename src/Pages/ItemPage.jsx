import React from "react";
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import BottomPage from '../Components/BottomPage';

const ItemPage = () => {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar items={[]} />
        <BottomPage />
      </div>
    </>
  );
};

export default ItemPage;
