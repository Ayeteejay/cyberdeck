import * as React from "react";
import "../scss/styles.scss";
import { Col, Row, Container } from "react-bootstrap";
import Computer from "../components/computer";

const Index = () => {
  return (
    <Computer>
      <Container>
        <Row>
          <Col>
            <p>Welcome. Enter prompt.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="text" placeholder="Enter directions here." />
          </Col>
        </Row>
      </Container>
    </Computer>
  );
};

export default Index;

export const Head = () => <title>Cyberdeck</title>;
