import React from "react";
import Particle from "../Particle";

const NotFoundPage = () => {
  return (
    <div className="not-found-page" style={styles.container}>
      <Particle />
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <button
        style={styles.button}
        onClick={() => (window.location.href = "/")}
      >
        Back to Homepage
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "transparent", // Ensuring background is transparent
    position: "relative", // Ensure proper stacking context
  },
  errorCode: {
    fontSize: "5rem",
    margin: "0",
    color: "#2c2c2c",
    zIndex: 1, // Make sure it is above the background
  },
  message: {
    fontSize: "1.50rem",
    marginBottom: "1.5rem",
    color: "#4b4b4b",
    zIndex: 1, // Make sure it is above the background
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid #2c2c2c",
    backgroundColor: "#fff",
    borderRadius: "4px",
    color: "#2c2c2c",
    zIndex: 10, // Ensure the button stays above the particle animation
    position: "relative", // So the z-index works
  },
};

export default NotFoundPage;
