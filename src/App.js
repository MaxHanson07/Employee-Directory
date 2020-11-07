import React, { Component } from "react";
import API from "./utils/API";
// import Container from "./components/Container";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
// import Alert from "./components/Alert";

class App extends Component {
  constructor() {

    super();
    this.state = {
      data: [],
      matchingCriteria: [],
      filter: "",
      orderedState: {
        name: 0,
        phone: 0,
        email: 0,
        dob: 0
      }
    }
  }

  componentDidMount() {
    API.getRandomEmployees()
      .then(res => {
        let items = res.data.results.map(item => {
          return {
            image: item.picture.thumbnail,
            name: item.name.first + " " + item.name.last,
            phone: item.phone,
            email: item.email,
            dob: item.dob.age
          }
        })
        this.setState({
          data: items
        })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value)
    this.setState({
      [name]: value   
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchByName(this.state.name);
  };

  searchByName = filterStr => {
    return this.state.data.filter(item => item.name.toLowerCase().includes(filterStr.toLowerCase()))
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Search By Employee Name!</h1>
        <SearchForm
          filter={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          employees={this.state.matchingCriteria}
        />
        <SearchResults data={this.state.data} />
      </div>
    );
  }
}

export default App;