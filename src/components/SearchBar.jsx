function SearchBar({ searchQuery, setSearchQuery }) {
return (
    <div className="search-bar">
    <label htmlFor="search">Search Parks:</label>
    <input
        type="text"
        id="search"
        value={searchQuery}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
);
}

export default SearchBar;
