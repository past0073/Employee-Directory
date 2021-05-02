import React from "react";
import chop from "../chop/chop"

function SearchResults(props) {
    return (
        <tbody>
        {props.results.filter(search => {
                let name = search.name.first.toLowerCase() + search.name.last.toLowerCase();
                let searchedName = props.value.toLowerCase().trim()
                let result = name.includes(searchedName)
               return result
        }).map(results => (
            <tr key={results.login.uuid}>
                <td data-th="image">
                    <img 
                    src={results.picture.thumbnail} 
                    alt={`${results.name.first} ${results.name.last}`}>
                    </img>
                </td>
                <td data-th="name">
                    {results.name.first} {results.name.last}
                </td>
                <td data-th="phone">
                    {results.cell}
                </td>
                <td data-th="email">
                    <a href={`mailto:${results.email}`} target="_blank" rel="noreferrer">
                                {results.email}
                    </a>
                </td>
                <td data-th="DOB">
                    {chop(results.dob.date)}
                </td>
            </tr>
        ))
        }
        </tbody>
    )
}

export default SearchResults;