import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMysql, SiPostman, SiMicrosoftoutlook, SiOpenai } from "react-icons/si";
import { FaWindows, FaGithub, FaGitlab, FaDatabase, FaRobot } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import CursorIcon from "../../components/About/CursorIcon";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="ChatGPT">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitLab">
        <FaGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cursor AI">
        <CursorIcon />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Outlook">
        <SiMicrosoftoutlook />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <DiVisualstudio />
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
