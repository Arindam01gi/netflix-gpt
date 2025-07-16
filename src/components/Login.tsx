import React, { useState } from 'react'
import Header from './Header'
import {z} from  'zod'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);


  const userSchema = z.object({
    
  })

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className='bg-gradient-to-b from-black'>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg" alt="background-image" />
      </div>
      <form className='bg-black opacity-90 text-black py-24 absolute flex flex-col w-1/3 justify-center items-center my-36  mx-auto left-0 right-0 gap-4 text-white rounded-md' >
        <div className='w-2/3 text-left m-2'>
          <p className='text-white text-4xl  font-bold'>  {isSignInForm ? "Sign In" : "Sign Up"}  </p>
        </div>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm' />}
        <input type='email' placeholder='Email Address' className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm' />
        <input type="password" placeholder='Password' className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm' />
        <button className='bg-red-800 text-white w-2/3 px-6 py-2 font-semibold rounded-sm cursor-pointer'> Sign In</button>
        <div className='w-2/3 text-left m-2 cursor-pointer' onClick={handleToggleForm}>
          {isSignInForm ? <p className='text-lg'>New to Netflix? <span className='font-bold '>Sign up now.</span> </p> : <p className='text-lg'>Already registered? <span className='font-bold '>Sign in now.</span> </p>}
        </div>
      </form>
    </div>
  )
}

export default Login