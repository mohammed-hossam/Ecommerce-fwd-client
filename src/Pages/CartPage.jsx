import React from "react";
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import BottomPage from '../Components/BottomPage';

export const CartPage = () => {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar items={[]} />
        <BottomPage />
      </div>
    </>
  );
};
