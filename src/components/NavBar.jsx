import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/SubmitPark">Submit a Park</NavLink>
      <NavLink to="/Wishlist">Travel Wishlist</NavLink>
    </nav>
  );
};

export default NavBar;