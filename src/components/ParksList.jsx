import ParkCard from "./ParkCard";

function ParksList({ parks }) {
    return (
      <span className="cards">
        {parks.map((park) => {
          return <ParkCard key={park.id} name={park.name} 
          image={park.image} description={park.description}/>
        })}
      </span>
    )
  } 

  export default ParksList