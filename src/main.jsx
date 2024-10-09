import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Products from "./pages/Products.jsx"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
