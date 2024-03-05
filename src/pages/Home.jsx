import { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import ParksList from "../components/ParksList";
import SearchBar from "../components/SearchBar";
import { WishlistContext } from "../components/WishlistContext";



function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { parks } = useContext(WishlistContext);
  const [sortByAZ, setSortByAZ] = useState(true);
  


  const filteredParks = parks
    .filter(park =>
      park.name.toLowerCase().includes(searchQuery.toLowerCase())
    )


    .sort((a, b) => {
      if (sortByAZ) {
        return a.name.localeCompare(b.name); 
      } else {
        return b.name.localeCompare(a.name); 
      }
    });

  const handleSortByAZ = () => {
    setSortByAZ(!sortByAZ);
  };


  return (
    <div>
      <NavBar />
      <SearchBar setSearchQuery={setSearchQuery} />
      <button onClick={handleSortByAZ}>
        {sortByAZ ? "Sort Z-A" : "Sort A-Z"}
      </button>
      {filteredParks.length > 0 ? (
        <ParksList parks={filteredParks} />
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
}


export default Home;