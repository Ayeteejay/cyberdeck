import * as React from "react";
import "../scss/styles.scss";
import { Col, Row, Container } from "react-bootstrap";
import Computer from "../components/computer";
import Commands from "../components/commands";

const Index = () => {
  return (
    <Computer>
      <Container>
        <Row>
          <Col>
            <p id="command-window">
              Welcome to Cyberdeck. To get started enter one of the following
              commands.<br></br>
              1. Play game<br></br>
              2. How to play<br></br>
              3. Credits
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Commands placeholder={"Enter command."}></Commands>
          </Col>
        </Row>
      </Container>
    </Computer>
  );
};

export default Index;

export const Head = () => <title>Cyberdeck</title>;
