import { useState, useContext, useEffect } from 'react';
import { WishlistContext } from './WishlistContext';
import './ParkCard.css';
import './ParksList.css';

function ParkCard({ id, name, image, description, location }) {
  const [showDetails, setShowDetails] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext);

  function toggleWishlist() {
    setInWishlist(prevWishlist => !prevWishlist);
    console.log(inWishlist);
  }

  useEffect(() => {
    const isInWishlist = wishlist.some(item => item.id === id);
    setInWishlist(isInWishlist);
  }, [wishlist, id]);

  function handleWishlistClick() {
    if(inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({name, id, image, description})
    }
    toggleWishlist();
  }

  function toggleDetails() {
    setShowDetails(prevShowDetails => !prevShowDetails);
  }

  return (
    <li className="park-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {showDetails && (
        <>
          <p>{description}</p>
          <p><strong>Location:</strong> {location}</p> 
        </>
      )}
      {/* <img src={image || "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={name} /> */}
      {showDetails && <p>{description}</p>}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <button onClick={handleWishlistClick}>
        {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </li>
  );
}

export default ParkCard;
