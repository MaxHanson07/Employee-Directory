import React from 'react';

export default function SearchResultRow(props) {

    return (
        <tr>
        <th scope="row"><img src={props.image}/></th>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
        </tr>
    )
}