import React, { useEffect, useState } from 'react'
import userIcon from '../assets/user_icon.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../store/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribed();
  }, [])

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
      navigate("/error")
    });
  }

  const handleSearch = () =>{
    navigate("/search")
  }

  return (
    <div className='fixed h-24 px-32 bg-gradient-to-b from-black w-full z-30 flex justify-between items-center'>
      <div className='w-48'>
        <img
          src={LOGO}
          alt="logo"
        />
      </div>
      {user?.email && (
        <div className='relative flex'>
          <div className='mx-10 mt-1 cursor-pointer' onClick={handleSearch }>
            <div className="text-white text-xl flex justify-center items-center">
              <span className='mr-3 fa-lg'><i class="fas fa-search"></i> </span>
              Sreach
            </div>
          </div>
          <div>

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
        </div>
      )}
    </div>
  )
}

export default Header