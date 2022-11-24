import React from "react";
import Classes from "../styles/Card.module.css";
import { Card } from "react-bootstrap";

function CardComponent({ title }) {
  return (
    <Card className={Classes.main}>
      <Card.Body className={Classes.textbox}>
        <p className={Classes.text}>{title}</p>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
