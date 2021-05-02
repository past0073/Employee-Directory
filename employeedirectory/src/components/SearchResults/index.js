import React from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <tbody>
        {props.results.filter(search => {
                let name = search.name.first.toLowerCase() + search.name.last.toLowerCase();
                let searchedName = props.value.toLowerCase()
                let result = name.includes(searchedName)
               return result
        }).map(results => (
            <tr key={results.login.uuid}>
                <td data-th="image">
                    <img src={results.picture.thumbnail} alt={`${results.name.first} ${results.name.last}`}></img>
                </td>
                <td data-th="name">
                    {results.name.first} {results.name.last}
                </td>
                <td data-th="phone">
                    {results.cell}
                </td>
                <td data-th="email">
                        {results.email}
                </td>
                <td data-th="DOB">
                    {results.dob.date}
                </td>
            </tr>
        ))
        }
        </tbody>
    )
}

export default SearchResults;