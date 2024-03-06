import { useState, useContext, useEffect } from 'react';
import { WishlistContext } from './WishlistContext';
import './ParkCard.css';
import './ParksList.css';

function ParkCard({ id, name, image, description, location, visitors}) {
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
      addToWishlist({name, id, image, description, location, visitors})
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
          <p><strong>2023 Visitors:</strong> {visitors}</p> 
        </>
      )}
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
