import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="profile justify-items-end">
        <div className="flex gap-3">
          {/* profile placeholder */}
          <div className="w-[3vw] h-[3vw]  bg-yellow-200 rounded-full overflow-hidden">
            <img
              src="dp.jpg"           // path sahi rakho: public me ho to "/dp.jpg"
              alt="profile"
              className="w-[40vw] h-[4vw] object-cover "
            />
          </div>

          <div className="font-[Montserrat]">
            <p className="text-lg ">Gukhan Sakthivel</p>
            <p className="text-xs ">Manager (Ride and Handling)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile