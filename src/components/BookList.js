import React from "react";
import { Table } from "react-bootstrap";

function BookList({ title, ...rest }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Download</th>
          <th>Uploader</th>
          <th>Size</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Thriller</td>
          <td>Jadughor Pata Ache Ei Ekhane</td>
          <td>download</td>
          <td>Kishor Pasha Emon</td>
          <td>5mb</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BookList;
