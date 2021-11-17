import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// CSS Import
import "./Footer.css";




function Footer(props) {

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black"
      style={{
        borderTop: "8px solid #686868",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
        
      }}
    >
   
     
<footer className="page-footer font-small unique-color-dark pt-2">


  <div className="container">

    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <Link to="/" className="btn btn-outline-light ">Sign up!</Link>
      </li>
    </ul>

  </div>

  <div className="footer-copyright text-center py-2">© 2021 Copyright:
    <Link to="/"> yumutlu</Link>
  </div>

</footer>
    </nav>
  );
}

export default Footer;

Footer.propTypes = {
  brandfirst: PropTypes.string,
  brandlast: PropTypes.string,
  navlinks: PropTypes.array,
};