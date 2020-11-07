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
    this.setState({ app: event.target.value });
  };

  // handleFormSubmit = event => {

  // };
  render() {
    return (
      <div>
          <h1 className="text-center">Search By Employee Name!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default App;