

function ParkCard({ name, image }) {
  return (
    <li className="park-card" >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <button>Show Details</button>
      <button>Add to Wishlist</button>
    </li>
  )
}

export default ParkCard;