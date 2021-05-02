import React, { Component } from "react";
import "./style.css";
import "../SearchResults";
import Search from "../Search";
import Employee from "../Employee";
import SearchResults from "../SearchResults";
import API from "../../utils/API"

class Table extends Component {
    state = {
        result: [],
        search: "",
        order: ""
    }

    componentDidMount() {
        this.searchEmployees();
      }

    searchEmployees = () => {
    API.search()
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

    handleFormSubmit = event => {
    event.preventDefault();

    //Toggle ascending/decending sort
    if (`${this.state.order}` === "" || `${this.state.order}` === "descending") {
        this.setState({
            order: "ascending"
        })

        let empSort = this.state.result.sort((a, b) => {
            let aName = a.name.first;
            let bName = b.name.first;
            if (aName < bName) {
                return -1
            }
            return 0;
        })
        this.setState({
            result: empSort
        })
    }

    else if (`${this.state.order}` === "ascending") {
        this.setState({
            order: "descending"
        })

        let empSort = this.state.result.sort((a, b) => {
            let aName = a.name.last;
            let bName = b.name.last;

            if (aName > bName) {
                return -1
            }
            return 0;
        })

        this.setState({
            result: empSort
        })
    }
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
                    <th scope="col"
                    className="arrow"
                    data-order={this.state.order}
                    onClick={this.handleFormSubmit}>
                    Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                    {!this.state.search ? (
                        <Employee 
                        results={this.state.result} 
                        />
                    ) : (
                        <SearchResults 
                        results={this.state.result}
                        value={this.state.search}
                        />
                    )}
            </table>
        </div>
        );
    }
}
export default Table;