import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Classes from "../styles/FileUploadForm.module.css";
import UploadBooks from "../hooks/UploadBooks";
function FileUploadForm() {

const [category, setCategory] = useState("");
const [writerName, setWriterName] = useState("");
const [publicationName, setPublicationName] = useState("");
const [edition, setEdition] = useState("");
const [error, setError] = useState("");
//const [loading, setLoading] = useState("");

let values = {
  Category: category,
  WriterName: writerName,
  PublicationName: publicationName,
  Edition: edition,
}

async function handleSubmit(e) {
  e.preventDefault();

  try {
    setError("");
    UploadBooks(values);

  } catch (error) {
    console.log(error);
    setError("Failed to create an account");
  }
}

  return (
    <div className={Classes.main}>
      <Form className="p-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Book Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your book category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Writer Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book writer name"
            onChange={(e) => setWriterName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Publication Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book publication name"
            onChange={(e) => setPublicationName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Edition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book edition (if any)"
            onChange={(e) => setEdition(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFileCover" className="mb-3">
          <Form.Label>Upload a book cover image</Form.Label>
          <Form.Control type="file" accept=".jpg, .jpeg" />
        </Form.Group>

        <Form.Group controlId="formFileBook" className="mb-3">
          <Form.Label>Insert your book here</Form.Label>
          <Form.Control type="file" accept=".pdf, .epub" />
        </Form.Group>

        <Button variant="primary" type="submit" id="upload_btn">
          Upload
        </Button>

        {error && <p className="error">{error}</p>}
      </Form>
    </div>
  );
 
}

export default FileUploadForm;
