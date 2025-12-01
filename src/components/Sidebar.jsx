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
        {/* logo */}
        <img
          src="m-logo.png"
          alt="logo"
          className="w-[2.5vw] mb-[10vh] opacity-90"
        />

        {/* menu */}
        <nav className="flex flex-col gap-[1.5vh] text-lg font-[Poppins]">
          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md
                             text-gray-300 hover:text-white hover:bg-white/10 transition">
            <span className="text-[1.1rem]">▦</span>
            <span>Dashboard</span>
          </button>

          {/* ACTIVE: Projects */}
          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] 
                             bg-white text-black shadow-sm transition">
            <span className="text-[1.1rem]">🚗</span>
            <span>Projects</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md
                             text-gray-300 hover:text-white hover:bg-white/10 transition">
            <span className="text-[1.1rem]">🧰</span>
            <span>Parts</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md
                             text-gray-300 hover:text-white hover:bg-white/10 transition">
            <span className="text-[1.1rem]">📄</span>
            <span>Reports</span>
          </button>

          <button className="flex items-center gap-[1vw] px-[0.8vw] py-[0.8vh] rounded-md
                             text-gray-300 hover:text-white hover:bg-white/10 transition">
            <span className="text-[1.1rem]">👥</span>
            <span>Team</span>
          </button>
        </nav>
      </div>

      {/* bottom text */}
      <p className="text-[0.7rem] text-gray-600">
        © 2024 Mahindra
      </p>
    </div>
  );
};

export default Sidebar;
