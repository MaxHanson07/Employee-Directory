import React from "react";
import SearchResultRow from "../SearchResultRow";
// import "./style.css";

export default function SearchResults(props) {

    return (
        <table className="table">
            <thead className="thead">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => <SearchResultRow image={item.image} name={item.name} phone={item.phone} email={item.email} dob={item.dob} />)}
            </tbody>
        </table>
    )
}