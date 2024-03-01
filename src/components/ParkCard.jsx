import { useState } from 'react';

function ParkCard({ name, image, description }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(prevShowDetails => !prevShowDetails);
  }

  return (
    <li className="park-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {showDetails && <p>{description}</p>}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <button>Add to Wishlist</button>
    </li>
  );
}

export default ParkCard;
