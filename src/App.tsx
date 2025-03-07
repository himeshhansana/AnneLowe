import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>;
}