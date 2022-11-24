import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <Container fluid>{children}</Container>
    </>
  );
}

export default Layout;
