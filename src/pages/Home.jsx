import { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import ParksList from "../components/ParksList";
import SearchBar from "../components/SearchBar";
import { WishlistContext } from "../components/WishlistContext";
import "../components/Home.css";



function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { parks } = useContext(WishlistContext);
  const [sortByAZ, setSortByAZ] = useState(false);
  


  const filteredParks = parks
    .filter(park =>
      park.name.toLowerCase().includes(searchQuery.toLowerCase())
    )


    .sort((a, b) => {
      if (sortByAZ) {
        return a.name.localeCompare(b.name); 
      } else {
        // return b.name.localeCompare(a.name);
        return parseInt(a.visitors)<parseInt(b.visitors)
      }
    });

  const handleSortByAZ = () => {
    setSortByAZ(!sortByAZ);
  };


  return (
    <div>
      <NavBar />
      <div className="search-sort-container">
        <div className="search-container">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div className="sort-container">
          <button className="sort-button" onClick={handleSortByAZ}>
            {sortByAZ ? "Sort by Popularity" : "Sort A-Z"}
          </button>
        </div>
      </div>
      <div className="parks-list-container">
        {filteredParks.length > 0 ? (
          <ParksList parks={filteredParks} />
        ) : (
          <div>No results found.</div>
        )}
      </div>
    </div>
  );
}


export default Home;