import React, { Component } from "react";
import "./style.css";
import "../SearchResults";
import Search from "../Search";
import SearchResults from "../SearchResults";
import API from "../../utils/API"

class Table extends Component {
    state = {
        result: {},
        search: ""
    }

    componentDidMount() {
        this.searchEmployees();
      }

    searchEmployees = (query) => {
    API.search(query)
        .then(res => this.setState({ result: res.data.results }))
        .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
            <Search 
                value={this.state.search}
                handleInputChange={this.handleInputChange}
            />
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
                <SearchResults 
                results={this.state.result}
                value={this.state.search}
                />

        </table>
        </div>
        );
    }
}
export default Table;