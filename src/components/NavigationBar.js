import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo.png";
import Classes from "../styles/NavigationBar.module.css";
import OffCanvas from "./OffCanvas";

function NavigationBar() {
  return (
    <>
      {["false"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className={Classes.NavBar}
        >
          <Container fluid>
            <Navbar.Brand className={Classes.brand}>
              <Link to="/">
                <img style={Classes.logo} src={logo} alt="project logo" />
              </Link>
              <h3>Book-Shelf</h3>
            </Navbar.Brand>

            <Navbar.Toggle
              style={{ marginLeft: "auto" }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              <FaUserAlt />
            </Navbar.Toggle>

            <OffCanvas />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;
