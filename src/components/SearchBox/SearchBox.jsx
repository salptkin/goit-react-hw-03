import "./SearchBox.css";

function SearchBox({ handleSearch, search }) {
  return (
    <div className="search-container">
      <p>Find contacts by name</p>
      <input  className="bar" type="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default SearchBox;
