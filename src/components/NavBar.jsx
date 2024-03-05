import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Toaster } from "react-hot-toast";

function NavBar() {
  return (
    <>
    <Toaster/>
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/SubmitPark">Submit a Park</NavLink>
      <NavLink to="/Wishlist">Travel Wishlist</NavLink>
    </nav>
    </>
  );
};

export default NavBar;