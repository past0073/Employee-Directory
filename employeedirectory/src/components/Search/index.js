import React from "react";
import "./style.css";

function Search(props) {
    return (
        <form className="form-inline my-2 my-lg-0">
        <input 
        value={props.search}
        onChange={props.handleInputChange}
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
};
  
export default Search;