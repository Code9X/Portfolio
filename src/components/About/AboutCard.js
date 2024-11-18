import React from "react";
import Card from "react-bootstrap/Card";
import { MdSportsEsports,MdMovie, MdAirplanemodeActive } from "react-icons/md"; 


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sebin Saji </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently employed as a software developer in Trivandrum.
            <br />
            I have completed BTech in Electronics and Communication and have since switched to coding.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
          <MdSportsEsports />  Playing Games
  </li>
  <li className="about-activity">
    <MdMovie />  Watching Movies
  </li>
  <li className="about-activity">
    <MdAirplanemodeActive />  Travelling
  </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sebin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
