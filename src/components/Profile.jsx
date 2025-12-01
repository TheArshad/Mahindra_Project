// src/components/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex items-center gap-[1vw]">
        {/* Circular avatar */}
        <div className="w-[3vw] border-1 border-white aspect-square rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/dp.jpg"  
            alt="profile"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Name & role */}
        <div className="font-[Montserrat]">
          <p className="text-lg">Gukhan Sakthivel</p>
          <p className="text-xs opacity-70">Manager (Ride and Handling)</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
