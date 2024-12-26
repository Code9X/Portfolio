import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Olx from "../../Assets/Projects/Olx.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import ToDo from "../../Assets/Projects/ToDo.png";
import ExpressCart from "../../Assets/Projects/ExpressCart.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Chatbot from "../Chatbot/Chatbot";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpressCart}
              isBlog={false}
              title="ExpressCart"
              description="E-commerce Website built using ASP.NET Core."
              ghLink="https://github.com/Code9X/ExpressCart"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal website built using React."
              ghLink="https://github.com/Code9X/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix clone that showcases movies from different genres, using the TMDB API."
              ghLink="https://github.com/Code9X/Netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Olx}
              isBlog={false}
              title="Olx Clone"
              description="An OLX clone utilizing Firebase authentication, enabling users to securely buy, sell, and chat in real time."
              ghLink="https://github.com/Code9X/Olx-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To-Do"
              description="It is a To-Do app that uses Google Firebase as the backend."
              ghLink="https://github.com/Code9X/TODO-List"       
            />
          </Col>
        </Row>
      </Container>
      <Chatbot />
    </Container>
  );
}

export default Projects;
