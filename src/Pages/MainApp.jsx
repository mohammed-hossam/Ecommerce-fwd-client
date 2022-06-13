import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import FooterPage from "../Components/FooterPage";
import CartPage from "../Pages/CartPage";
import ItemPage from "../Pages/ItemPage";
import AboutUS from "../Pages/AboutUS";
import Main from "./Main";
import SignInPage from "./SignInPage";


const MainApp = () => {
  
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <FooterPage />
      
    </Router>
  );
};

export default MainApp;
