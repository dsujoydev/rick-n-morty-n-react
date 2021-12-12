import React from "react";

const Search = ({search, setSearch}) => {
  return (
    <div className="box-container">
      <form className="search-form">
        <input 
        onChange={e => {
            setSearch(e.target.value)
        }}
        placeholder="Search Characters" type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
