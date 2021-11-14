import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";



// CSS Import
import "./Navbar.css";

// Service Import
import authService from "../../services/auth.service";

import { useHistory } from "react-router-dom";

function Navbar(props) {
  let history = useHistory();


  const handleItemClick = (path) => {
    history.push(path);
  };

  const handleLogout = () => {
    authService.logout();
    window.location.replace("/login");
  };

  const Routes = [
    {
      name: `${t("tvshows")}`,
      link: "/tv-shows",
    },
    {
      name: `${t("movies")}`,
      link: "/movies",
    },
    {
      name: `${t("kids")}`,
      link: "/kids",
    },
  ];


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <a
        role="button"
        onClick={() => handleItemClick("/home")}
        className="navbar-brand"
      >
        <img
          src={`http://${window.location.host}/logo.png`}
          height="40"
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto float-right"></ul>
        <ul className="nav navbar-nav navbar-right">
          {Routes.map((item) => (
            <li key={item.name} className="nav-item mx-2">
              <a
                role="button"
                className="nav-link"
                onClick={() => handleItemClick(item.link)}
              >
                {item.name}
              </a>
            </li>
          ))}

          

         
         
      
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  brandfirst: PropTypes.string,
  brandlast: PropTypes.string,
  navlinks: PropTypes.array,
};