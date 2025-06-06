import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { FiExternalLink } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import ReactGA from "react-ga4";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Resume.pdf";
import Chatbot from "../Chatbot/Chatbot";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Custom event for tracking downloads
  const handleDownload = () => {
    ReactGA.event({
      category: "Downloads",
      action: "Downloaded Resume",
      label: "Resume PDF",
    });
    console.log("Resume download event tracked.");
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <FiExternalLink  />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="justify-content-center">
          <div
            style={{
              width: "100%",
              maxWidth: width > 786 ? "75%" : "100%",
              padding: width < 768 ? "15px" : "0",
              overflowX: "hidden",
            }}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex flex-column align-items-center"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div
                  key={`page_${index + 1}`}
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={width > 768 ? 600 : 360}
                  />
                </div>
              ))}
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <FiExternalLink  />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Chatbot />
      </Container>
    </div>
  );
}

export default ResumeNew;
