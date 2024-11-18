import React from "react";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <button style={styles.button} onClick={() => window.location.href = "/"}>
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
  },
  errorCode: {
    fontSize: "4rem",
    margin: "0",
    color: "#2c2c2c", // Darker gray color
  },
  message: {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    color: "#4b4b4b", // Slightly lighter dark gray
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid #2c2c2c",
    backgroundColor: "#fff",
    borderRadius: "4px",
    color: "#2c2c2c",
  },
};

export default NotFoundPage;
