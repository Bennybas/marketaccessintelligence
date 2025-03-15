import React from 'react'
import { FcBusinessman  } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
   
      <div className="bg-gray-50 top-0 left-0 w-full z-10">
        <header className="bg-white text-gray-600 flex items-center justify-between px-6 py-3 border-b border-gray-300 shadow-sm">
          {/* Logo Section */}
          <img
          onClick={()=>navigate('/')}
            src="/chryselys.png"
            alt="Logo"
            className="h-12 w-auto cursor-pointer"
          />


            <div className='flex items-center'>
                <span className='text-[16px] font-bold text-gray-700'>
                GenAI-Powered Market Access Intelligence
                </span>
            </div>


          

          {/* Right Side Section with User Info */}
          <div className="flex items-center space-x-4">
            <div className='flex items-center'>
              <span className="text-md font-light">Hello,</span>
              <span className="text-md font-medium ml-1">User</span>
            </div>

            <button className="p-1 bg-gray-200 rounded-full">
              <FcBusinessman className="text-3xl" />
            </button>
          </div>
        </header>
      </div>
   
     
  )
}

export default Header