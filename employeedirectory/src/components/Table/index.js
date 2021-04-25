import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>image here</td>
                <td>name</td>
                <td>phone</td>
                <td>email</td>
                <td>date of birth</td>
                </tr>
            </tbody>

        </table>
    );
};

export default Table;