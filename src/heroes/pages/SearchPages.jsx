import React from "react";
import HeroCard from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";

const SearchPages = () => {

  const {} = useForm({
    
  })

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">Search a hero</div>
        </div>
      
        {/* <HeroCard/> */}
      </div>
    </>
  );
};

export default SearchPages;
