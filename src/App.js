import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import Connect from "./components/Connect/Connect";
import NotFound from "./components/NotFound/NotFound";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

function App() {
  const [load, updateLoad] = useState(true);
  const location = useLocation();

  // Track page views whenever the route changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    console.log("Tracking page:", location.pathname + location.search);   
  }, [location]);

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
