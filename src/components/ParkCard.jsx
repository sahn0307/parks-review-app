import { useState, useContext  } from 'react';
import { WishlistContext } from './WishlistContext';

function ParkCard({ id, name, image, description }) {
  const [showDetails, setShowDetails] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const { addToWishlist } = useContext(WishlistContext);

    function toggleWishlist() {
    setInWishlist(prevWishlist => !prevWishlist);
  }

  function handleWishlistClick() {
    addToWishlist({name, id, image, description});
    toggleWishlist();
  }

  function toggleDetails() {
    setShowDetails(prevShowDetails => !prevShowDetails);
  }

  return (
    <li className="park-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
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
