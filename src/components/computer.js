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
                  <Col>
                    <div id="computer-screen">{children}</div>
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
