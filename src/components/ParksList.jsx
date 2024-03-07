import ParkCard from "./ParkCard";

function ParksList({ parks }) {
  
  return (
      <span className="cards">
        {parks.map((park) => {
          return <ParkCard key={park.id} {...park}/>
        })}
      </span>
    )
  } 

export default ParksList
