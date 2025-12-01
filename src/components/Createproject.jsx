// src/components/Createproject.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Createproject = () => {
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins] mt-8">
      {/* Top bar */}
      <header className="mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="text-sm text-gray-400">
            Here are the list of all the projects currently being developed by the company
          </p>
        </div>
      </header>

      {/* Search + button row */}
      <div className="flex items-center justify-between mb-16">
        <input
          placeholder="Search for projects here"
          className="
            w-[60%] h-[7vh]
            border border-[#4a4f4f]
            px-5 text-sm text-gray-300
            bg-transparent
            outline-none focus:outline-none
          "
        />

        <button
          onClick={() => navigate("create")}  // -> /projects/create
          className="
            bg-white text-black
            px-6 py-3 
            text-sm font-medium
            flex items-center gap-2
            rounded-md cursor-pointer
          "
        >
          <img src="car-icon.png" alt="" className="w-[1.2rem]" />
          <span>Create Project</span>
        </button>
      </div>

      {/* Center illustration + text */}
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-[#6c787a]">
        <img src="no-project.png" alt="" className="w-[20vw] max-w-[260px] rounded-lg mb-6" />
        <p className="text-xl">No projects yet !</p>
      </div>
    </div>
  );
};

export default Createproject;
