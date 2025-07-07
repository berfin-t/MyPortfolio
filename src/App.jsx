import React, { useState, useEffect } from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import About from "./components/About/About";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
