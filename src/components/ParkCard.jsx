import { useState, useContext  } from 'react';
import { WishlistContext } from './WishlistContext';

function ParkCard({ id, name, image, description }) {
  const [showDetails, setShowDetails] = useState(false);

  const { addToWishlist } = useContext(WishlistContext);
    

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
      <button onClick={() => addToWishlist({name, id, image, description})}>
        Add to Wishlist
      </button>
    </li>
  );
}

export default ParkCard;
