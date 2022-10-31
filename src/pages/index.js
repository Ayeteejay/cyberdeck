import * as React from "react";
import "../scss/styles.scss";
import { Col, Row, Container } from "react-bootstrap";
import Computer from "../components/computer";
import Commands from "../components/commands";
import GameTimer from "../components/game-timer";
import FooterStatus from "../components/footer-status";

const Index = () => {
  return (
    <Computer>
      <Container>
        <Row>
          <Col>
            <section id="status">
              <h1 id="command-title">
                <strong>Cyberdeck</strong>
              </h1>
              <GameTimer></GameTimer>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="command-window">
              Welcome. To get started enter one of the following commands.
              <br></br>
              1. Play game<br></br>
              2. Load saved game<br></br>
              3. How to play<br></br>
              4. Credits
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
