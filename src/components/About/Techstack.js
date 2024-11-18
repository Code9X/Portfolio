import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiPostgresql, SiMysql, SiAzureartifacts, SiAzuredataexplorer, SiAzuredevops, SiAzurefunctions, SiGraphql, SiMicrosoftsqlserver } from 'react-icons/si';
import { FaAws, FaDocker } from 'react-icons/fa';
import { DiReact, DiHtml5, DiCss3, DiAws, DiJavascript, DiNodejs } from 'react-icons/di';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;
