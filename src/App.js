import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Contact from "./pages/contact"
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} transition={Slide} />

    </>
  );
}

export default App;
