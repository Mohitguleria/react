import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div className="header-styles">
      <h1 className="nav-link">
        <Link to="/">Zomato</Link>
      </h1>
      <nav>
        <ul>
          <li className="nav-link">Investor Relations</li>
          <li className="nav-link">
            <Link to="/add-restaurant">Add Restaurant</Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-link">Signup</li>
          <li className="nav-link">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

module.exports = Header;
