import React from "react";
import { Col, Row } from "react-bootstrap";
import toolsIcons from "../../Helper/Data/ToolsIcons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolsIcons.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons-container" key={index}>
          <div className="tech-icons">{tool.icon}</div>
          <p className="tech-icons-name">{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
