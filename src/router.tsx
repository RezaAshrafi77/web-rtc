import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/index";
import Conference from "./pages/conference/index";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="conference" element={<Conference />} />
      </Routes>
    </BrowserRouter>
  );
}
