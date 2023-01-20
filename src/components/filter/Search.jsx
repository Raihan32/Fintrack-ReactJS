import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setQuery }) => {
  return (
    <div className="src_modul">
      <p>Cari Modul</p>
      <div className="searchBar">
        <input
          className="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Cari Course..."
          defaultValue=""
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="searchQuerySubmit"
          type="submit"
          name="searchQuerySubmit"
        >
          <FaSearch size={16} style={{ color: "#666666" }} />
        </button>
      </div>
    </div>
  );
};

export default Search;
