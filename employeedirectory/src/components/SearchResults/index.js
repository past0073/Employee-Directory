import React from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <tbody>
        {props.results.filter(search => {
            let name = search.name.first +  " " + search.name.last;
            console.log(name);
        })}
        </tbody>
    )
}

export default SearchResults;