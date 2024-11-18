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
        <Col md={6} className="text-center">
          <img
            src={ConnectImg}
            alt="Connect"
            className="img-fluid"
            style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
            onError={(e) => e.target.src = "https://via.placeholder.com/400x400"}
          />
        </Col>

        <Col md={6}>
          <h2 className="text-center mb-4" style={{ color: "white" }}>Connect Me</h2>

          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              style={{ position: "relative" }}
              dismissible={false}
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
                onClick={() => setShowAlert(false)}
              >
                &times;
              </span>
            </Alert>
          )}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Row className="mb-3">
              <Col sm={3} className="d-flex align-items-center">
                <Form.Label style={{ color: "white", marginBottom: "0" }}>
                  Name <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}> {/* Reduced the width of the input field */}
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: "0.375rem 0.75rem" }} // Adjust padding
                />
              </Col>
            </Row>

            {/* Address Field */}
            <Row className="mb-3">
              <Col sm={3} className="d-flex align-items-center">
                <Form.Label style={{ color: "white", marginBottom: "0" }}>
                  Address <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}> {/* Reduced the width of the input field */}
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{ padding: "0.375rem 0.75rem" }} // Adjust padding
                />
              </Col>
            </Row>

            {/* Contact Field */}
            <Row className="mb-3">
              <Col sm={3} className="d-flex align-items-center">
                <Form.Label style={{ color: "white", marginBottom: "0" }}>
                  Contact <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}> {/* Reduced the width of the input field */}
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  style={{ padding: "0.375rem 0.75rem" }} // Adjust padding
                />
              </Col>
            </Row>

            {/* Country Field */}
            <Row className="mb-3">
              <Col sm={3} className="d-flex align-items-center">
                <Form.Label style={{ color: "white", marginBottom: "0" }}>
                  Country <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col sm={8}> {/* Reduced the width of the input field */}
                <Form.Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  style={{ padding: "0.375rem 0.75rem" }} // Adjust padding
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
              <Col sm={3} className="d-flex align-items-center">
                <Form.Label style={{ color: "white", marginBottom: "0" }}>
                  Enquiry
                </Form.Label>
              </Col>
              <Col sm={8}> {/* Reduced the width of the input field */}
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  style={{ padding: "0.375rem 0.75rem" }} // Adjust padding
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3} /><Col sm={8}>
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

export default Connect
