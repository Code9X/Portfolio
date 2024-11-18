import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { countries } from "./Countries";
import ConnectImg from "../../Assets/Connect.png"; 

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    country: "",
    enquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false); // To control visibility of the alert

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.contact || !formData.country) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(""); // Clear error

    // Send email using Email.js
    const emailParams = {
      name: formData.name,
      address: formData.address,
      contact: formData.contact,
      country: formData.country,
      enquiry: formData.enquiry || "No enquiry provided",
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
        setShowAlert(true); // Show alert when submitted
        setFormData({
          name: "",
          address: "",
          contact: "",
          country: "",
          enquiry: "",
        });

        // Auto-dismiss alert after 3 seconds
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
    <Container fluid className="min-vh-100 d-flex flex-column">
      <Row className="justify-content-between align-items-center flex-grow-1">
        {/* Left Column for Image */}
        <Col md={6} className="text-center">
        <img
  src={ConnectImg} // Using the imported ConnectImg
  alt="Connect"
  className="img-fluid"
  style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
  onError={(e) => e.target.src = "https://via.placeholder.com/400x400"} // Fallback to placeholder on error
/>
        </Col>

        {/* Right Column for Form */}
        <Col md={6}>
          <h2 className="text-center mb-4" style={{ color: "white" }}>Connect Me</h2>

          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)} // Allow manual closing
              style={{ position: "relative" }}
              dismissible={false} // Disable the default close button
            >
              Your message has been sent successfully!
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "black",
                }}
                onClick={() => setShowAlert(false)} // Custom close button
              >
                &times;
              </span>
            </Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label style={{ color: "white" }}>
                  Name <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            {/* Address Field */}
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label style={{ color: "white" }}>
                  Address <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            {/* Contact Field */}
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label style={{ color: "white" }}>
                  Contact <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            {/* Country Field */}
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label style={{ color: "white" }}>
                  Country <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            {/* Enquiry Field */}
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label style={{ color: "white" }}>
                  Enquiry <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Connect;
