import React from "react";

const SearchPages = () => {
  return (
    <div style={{margin:'10px'}}>
      <form className="form-inline">
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default SearchPages;
