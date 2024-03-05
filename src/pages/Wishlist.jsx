import NavBar from "../components/NavBar";
import { useContext } from "react";
import { WishlistContext } from "../components/WishlistContext";
import ParkCard from "../components/ParkCard";


function Wishlist() {
const { wishlist } = useContext(WishlistContext);


  return(
    <>
      <NavBar />
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map(park => (
        <ParkCard key={park.id} {...park} />
        ))}
      </ul>
    </>
  )
}



export default Wishlist;