function SearchBar() {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Parks:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value=""
        onChange={}
      />
    </div>
  );
}

export default SearchBar;
