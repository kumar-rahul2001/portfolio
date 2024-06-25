import React from "react";
import { Col, Row } from "react-bootstrap";
import techIcons from "../../Helper/Data/TechIcons";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons-container" key={index}>
          <div className="tech-icons">{tech.icon}</div>
          <p className="tech-icons-name">{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
