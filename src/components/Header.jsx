import React, { useState } from 'react'
import userIcon from '../assets/user_icon.jpg'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen ,setMenuOpen] = useState(false)
  const user = useSelector((state) => state.user); 
  const navigate = useNavigate()
  console.log("user",user)
 
  const handleMenuClick = () =>{
   setMenuOpen(!menuOpen)
  }

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      console.log(error)
       navigate("/error")
    });
  }

  return (
    <div className='absolute h-24 px-32 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center'>
      <div className='w-48'>
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="logo" 
        />
      </div>
      {user?.email && ( 
        <div className='relative'> 
          <div 
            className='cursor-pointer' 
            onClick={handleMenuClick}
          >
            <img 
              src={userIcon} 
              alt="User Icon" 
              className="w-10 h-10 " 
            />
          </div>
          {menuOpen && (
            <div className='absolute right-0 mt-2 bg-black w-60  h-auto rounded-md shadow-lg text-white text-lg'>
               <ul>
                 <li className='px-4 py-2 cursor-pointer' onClick={handleSignOut}>Sign out <span className='ml-2'><i class="fa fa-arrow-right-from-bracket"></i></span></li> 
               </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header