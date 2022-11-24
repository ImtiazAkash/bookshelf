import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Classes from "../styles/LoginForm.module.css"

function LoginForm() {
  return (
    <div className={Classes.main}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <div>
          Don't have an account? <Link to="/signup"> Signup </Link> instead.
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
