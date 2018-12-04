import React from "react";
import { Link } from "react-router-dom";
import '../css/nav.css';
import '../css/hover.css';

const NavTabs = () => (

<div>
<div className="navbar navbar-expand-md navbar-inverse text-left align-items-start navbar-fixed-top">
<button className="navbar-toggler bg-primary text-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   Nav 
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">

  <ul className="nav navbar-nav">
   <li className = "hvr-underline-reveal"><Link
        to="/home"
        className={
          window.location.pathname === "/home" ? "nav-link active" : "nav-link"
        }
      >
        <h3>Home</h3>
      </Link></li>
   <li className = "hvr-underline-reveal"><Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        <h3>About</h3>
      </Link></li>
   <li className = "hvr-underline-reveal"><Link
        to="/portfolio"
        className={
          window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
        }
      >
        <h3>Portfolio</h3>
      </Link></li>
   
      
  </ul>
</div>
</div>
</div>


</div>


);

export default NavTabs;
