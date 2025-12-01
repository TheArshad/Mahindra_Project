// src/components/Userui.jsx
import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const Userui = () => {
  return (
    <div
      className="
        flex-1 min-h-screen   /* ⬅️ yaha change */
        bg-gradient-to-b 
        from-[#050505] via-[#111111] to-[#1c2220]
        px-10 py-8
      "
    >
      {/* Top-right profile bar */}
      <Profile />

      {/* Yahan nested route ka component render hoga 
          (/projects -> Createproject, /projects/create -> Makeproject) */}
      <Outlet />
    </div>
  );
};

export default Userui;

