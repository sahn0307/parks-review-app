import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ParksList from "../components/ParksList";
import SearchBar from "../components/SearchBar";

function Home() {
const [parks, setParks] = useState([]);
const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    fetch("http://localhost:3000/nationalParks")
    .then(resp => resp.json())
    .then(data => setParks(data))
    .catch(err => console.log(err))
  }, []);

const filteredParks = parks.filter(park =>
  park.name.toLowerCase().includes(searchQuery.toLowerCase())
);


return (
  <div>
    <NavBar />
    <SearchBar setSearchQuery={setSearchQuery} />
    {filteredParks.length > 0 ? (
      <ParksList parks={filteredParks} />
    ) : (
      <div>No results found.</div>
    )}
  </div>
);
}


export default Home;