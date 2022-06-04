import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CartPage from "./Pages/CartPage";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import ItemPage from "./Pages/ItemPage";
import AboutUs from "./Pages/AboutUs";
import PageFooter from "./Components/PageFooter";


const MainApp = () => {
  return (
    <Router>
      <ResponsiveAppBar items={[]} />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <PageFooter />
    </Router>
  );
};

export default MainApp;
