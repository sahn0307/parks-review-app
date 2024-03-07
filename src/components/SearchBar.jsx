import './SearchBar.css'

function SearchBar({ searchQuery, setSearchQuery }) {
return (
    <div className="search-bar">
    <input
        type="text"
        id="search"
        value={searchQuery}
        placeholder="Search Parks ex. Yellowstone"
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
    );
}

export default SearchBar;
