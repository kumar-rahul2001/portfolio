import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {
  document.title = "Rahul Kumar | Blogs ";
  return (
    <div>
      <Container fluid className="blog-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          Coming Soon !!!
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
