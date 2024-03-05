import { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import ParksList from "../components/ParksList";
import SearchBar from "../components/SearchBar";
import { WishlistContext } from "../components/WishlistContext";



function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { parks } = useContext(WishlistContext);


  const filteredParks = parks
    .filter(park =>
      park.name.toLowerCase().includes(searchQuery.toLowerCase())
    )


    .sort((a, b) => a.name.localeCompare(b.name));


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