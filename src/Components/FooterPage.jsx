import React from "react";
import ContactUS from "./ContactUS";
import {Link} from "react-router-dom"


const FooterPage = () => {
  return (
    <footer>
      <div>E-shop</div>
          <Link to="/aboutus">
             About Us
          </Link>
        <ContactUS />
      
    </footer>
  );
};

export default FooterPage;
