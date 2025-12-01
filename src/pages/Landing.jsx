import React from 'react'
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();

  return (
    <div className='text-white h-full w-full bg-gradient-to-b from-[#000000] via-[#0b1512] to-[#101d18]'>

      <div className="landingpage-top-portion flex w-full justify-between px-4 my-4">
        <div className="Gforce flex gap-3 ">
          <div className="Letter text-6xl font-[Joane]">G</div>
          <div>
            <p className='text-3xl font-[Poppins]'>GForce</p>
            <p className='text-sm text-gray-500'>Private Limited</p>
          </div>
        </div>

        <btn onClick={() => navigate("/projects")} className='Login-btn bg-white text-black h-fit w-36 text-center py-2 rounded-sm hover:cursor-pointer'>Login Now</btn>
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">

        <img
          src="m-logo.png"
          className="w-32 "
          alt="logo"
        />

        <p className="font-[Poppins] text-lg font-semibold tracking-[0.05em] text-white text-center">
          MAHINDRA VEHICLE DEVELOPMENT SUITE
        </p>

      </div>

      <div className='car-1 justify-items-center mt-18'>
        <img className='w-200' src="car-1.png" alt="" />
      </div>


    </div>
  )
}

export default Landing