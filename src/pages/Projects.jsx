// src/pages/Projects.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Userui from "../components/Userui";

const Projects = () => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* CENTER BORDER LINE */}
      <div className="w-[1.5px] h-screen bg-gradient-to-b from-transparent via-white/40 to-transparent" />

      {/* RIGHT MAIN AREA (Profile + Outlet) */}
      <Userui />
    </div>
  );
};

export default Projects;
