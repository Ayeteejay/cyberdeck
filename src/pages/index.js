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
            <p className="last-terminal-description">Welcome to Cyberdeck.</p>
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
