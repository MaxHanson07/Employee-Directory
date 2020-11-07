import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {/* {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employees" src={result.picture.thumbnail} className="img-fluid" />
          <p>{result.name}</p>
          <p>{result.phone}</p>
          <p>{result.email}</p>
          <p>{result.dob.age}</p>
        </li>
      ))} */}
    </ul>
  );
}

export default SearchResults;