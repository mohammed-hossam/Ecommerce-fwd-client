import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import FooterPage from "../Components/FooterPage";
import CartPage from "../Pages/CartPage";
import ItemPage from "../Pages/ItemPage";
import AboutUS from "../Pages/AboutUS";
import App from "../App";

const MainApp = () => {
  return (
    <Router>
      <ResponsiveAppBar items={[]} />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
      <FooterPage />
    </Router>
  );
};

export default MainApp;
