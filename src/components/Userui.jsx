import React from "react";
import Createproject from "./Createproject";
import Profile from "./Profile";

const Userui = () => {
  return (
    <div className="flex-1 h-screen 
    bg-gradient-to-b 
    from-[#050505] via-[#111111] to-[#1c2220]
    px-10 py-8">
      <Profile/>
      <Createproject />
    </div>
  );
};

export default Userui;
