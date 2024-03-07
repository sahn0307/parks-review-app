import NavBar from "../components/NavBar";
import { useContext } from "react";
import { WishlistContext } from "../components/WishlistContext";
import ParkCard from "../components/ParkCard";
import "../components/Wishlist.css";


function Wishlist() {
const { wishlist } = useContext(WishlistContext);


  return(
    <>
      <div className="nav-bar-container">
        <h1 className="banner">Park Pal</h1>
        <NavBar />
      </div>
      <h2>Wishlist</h2>
      <span className="cards">
        {wishlist.map(park => (
        <ParkCard key={park.id} {...park} />
        ))}
      </span>
    </>
  )
}



export default Wishlist;