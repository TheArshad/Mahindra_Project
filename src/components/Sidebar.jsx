// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="
        h-screen
        w-[23%]
        bg-black
        flex flex-col justify-between
        text-white
        pt-[2vh] pb-[2vh] pl-[2vw] pr-[1.5vw]
      "
    >
      {/* TOP: logo + menu */}
      <div className="flex flex-col">
        {/* Logo */}
        <img
          src="/m-logo.png"
          alt="logo"
          className="w-[2.5vw] mb-[2vh] opacity-90"
        />

        {/* Menu */}
        <nav className="flex flex-col gap-[1.5vh] text-[0.95rem] font-[Poppins-semibold]">
          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition">
            <img className="w-[1vw]" src="/deshboard.png" alt="" />
            <span>Dashboard</span>
          </button>

          {/* ACTIVE: Projects */}
          <button className="flex items-center gap-[.75vw] px-[0.8vw] py-[0.8vh] rounded-md bg-white text-black shadow-sm transition">
            <img className="w-[1.4vw]" src="/car-icon.png" alt="" />
            <span>Projects</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition">
            <img src="/ports.png" alt="" />
            <span>Parts</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition">
            <img src="/notepad.png" alt="" />
            <span>Reports</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition">
            <img src="/teams.png" alt="" />
            <span>Team</span>
          </button>
        </nav>
      </div>

      {/* Bottom text */}
      <p className="text-[0.7rem] text-gray-600">© 2024 Mahindra</p>
    </div>
  );
};

export default Sidebar;
