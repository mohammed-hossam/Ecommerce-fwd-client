import React from "react";
import { Link } from "react-router-dom";
import ContactUS from "./ContactUS";

function PageFooter() {
  return (
    <footer>
      <h2>E-Shop</h2>
      <Link to="/aboutus">About Us</Link>
      <ContactUS />
    </footer>
  );
}

export default PageFooter;
