import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Computer = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={8} className="mx-auto my-5">
            <main id="computer-body">
              <Container>
                <Row>
                  <Col className="p-0">
                    <div id="computer-screen-border">
                      <div id="computer-screen">{children}</div>
                      <span id="power-light"></span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Computer;
