import PropTypes from "prop-types";



// CSS Import
import "./Navbar.css";



import { useNavigate } from "react-router-dom";

function Navbar(props) {
  let history = (useNavigate);


  const handleItemClick = (path) => {
    history(path);
  };



  const Routes = [
    {
      name: "Tv Shows",
      link: "/tv-shows",
    },
    {
      name: "Movies",
      link: "/movies",
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