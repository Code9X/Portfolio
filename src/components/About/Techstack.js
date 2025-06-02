import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiPostgresql, SiMysql, SiAzureartifacts, SiAzuredataexplorer, SiAzuredevops, SiAzurefunctions, SiGraphql, SiMicrosoftsqlserver, SiJavascript, SiGit, SiDotnet } from 'react-icons/si';
import { FaAws, FaDocker, FaGit, FaJenkins } from 'react-icons/fa';
import { DiReact, DiHtml5, DiCss3, DiAws, DiJavascript, DiNodejs, DiDotnet } from 'react-icons/di';
import { SiTerraform, SiAnsible } from 'react-icons/si';
import { BsBootstrap } from "react-icons/bs";
import WunderGraphIcon from "./WunderGraphIcon";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="WunderGraph">
        <WunderGraphIcon />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Terraform">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ansible">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GraphQL">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft SQL Server">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <BsBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
