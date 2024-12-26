import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { countries } from "./Countries";
import ConnectImg from "../../Assets/Connect.png";
import Particle from "../Particle";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    country: "",
    enquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.name || !formData.email || !formData.address || !formData.contact || !formData.country) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
  
    const emailParams = {
      name: formData.name,
      email: formData.email,  // This will still be used in the template body
      address: formData.address,
      contact: formData.contact,
      country: formData.country,
      enquiry: formData.enquiry || "No enquiry provided",
      reply_to: formData.email, // This will set the 'From' email address for replies
    };
  
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setSubmitted(true);
        setShowAlert(true);
        setFormData({
          name: "",
          email: "", // Clear email field
          address: "",
          contact: "",
          country: "",
          enquiry: "",
        });
  
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      })
      .catch((err) => {
        setError("An error occurred while sending the email. Please try again.");
        console.error(err);
      });
  };

  return (
    <Container fluid className="min-vh-100 d-flex flex-column px-3" style={{ position: "relative" }}>
      <div className="particle-background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <Particle />
      </div>
      <Row className="justify-content-start align-items-center flex-grow-1">
        {/* Image Column */}
        <Col md={6} className="text-center mb-4">
          <img
            src={ConnectImg}
            alt="Connect"
            className="img-fluid"
            style={{
              maxWidth: "50%",
              height: "auto",
              borderRadius: "10px",
              paddingTop: "80px",
            }}
            onError={(e) => (e.target.src = "https://via.placeholder.com/400x400")}
          />
        </Col>

        {/* Form Column */}
        <Col md={5} className="pl-3 pr-md-5">
          <h2 className="text-center mb-4" style={{ color: "white", paddingTop: "50px" }}>
            Connect Me
          </h2>

          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Your message has been sent successfully!
            </Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            {/* Email Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            {/* Address Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Address <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            {/* Contact Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Contact <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            {/* Country Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Country <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={9}>
                <Form.Select name="country" value={formData.country} onChange={handleChange} required>
                  <option value="">Select your country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Enquiry Field */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} style={{ color: "white" }}>
                Enquiry
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {/* Submit Button */}
            <Row className="mb-3">
              <Col sm={{ span: 9, offset: 3 }}>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Connect;
