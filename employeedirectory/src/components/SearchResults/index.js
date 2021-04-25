import React from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <tbody>
        {props.results.filter(search => {
                let name = search.name.first + search.name.last;
                let result = name.includes(props.value)
               return result
        }).map(results => (
            <tr key={results.login.uuid}>
                <td data-th="image">
                    <img src={results.picture.thumbnail}></img>
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