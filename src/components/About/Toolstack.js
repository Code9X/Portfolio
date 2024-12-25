import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMysql, SiPostman } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <FaWindows /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database Tools: SSMS, DBeaver">
        <FaDatabase />
      </Col>
    </Row>
  );
}

export default Toolstack;
