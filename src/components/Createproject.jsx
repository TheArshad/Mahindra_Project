import React from 'react'
import { useNavigate } from "react-router-dom"; 

const Createproject = () => {

  const navigate = useNavigate(); 
     
  return (
    <div className='font-[Poppins]'>
      {/* Top bar */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="text-sm text-gray-400">
            Here are the list of all the projects currently being developed by the company
          </p>
        </div>


      </header>

      {/* Search + button row */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex-1">
          <input placeholder='Search for projects here' className="w-[85%] h-[7vh] border border-[#4a4f4f]  px-4 py-3 text-sm text-gray-400 outline-none focus:outline-none" />
        </div>

        <button onClick={() => navigate("/createproject")} className="bg-white text-black px-5 py-3 w-[25%] text-md font-medium flex items-center gap-2 cursor-pointer">
          <img src="car-icon.png" alt="" />
          <span>Create Project</span>
        </button>
      </div>

      {/* Center illustration + text (placeholder) */}
      <div className="w-full h-[60%] flex flex-col items-center justify-center text-[#6c787a]">
        <img src='no-project.png' className="w-80 rounded-lg" />
        <p className='text-xl'>No projects yet !</p>
      </div>
    </div>
  )
}

export default Createproject