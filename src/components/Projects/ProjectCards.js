import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="description" style={{ flexGrow: 1 }}>
        {props.description.trim()}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          
          {/* Render Demo Button if provided */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
