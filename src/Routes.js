import React from "react";
import Employees from "pages/Employees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
