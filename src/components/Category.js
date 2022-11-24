import React from "react";
import CardComponent from "./CardComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Classes from "../styles/Category.module.css";

function Category() {
  return (
    <div className={Classes.main}>
      <h3 className={Classes.header}>Categories</h3>
      <Row className={Classes.section}>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
        <Col sm={3}>
          <CardComponent title="thriller" />
        </Col>
      </Row>
    </div>
  );
}

export default Category;
