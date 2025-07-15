import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='bg-gradient-to-b from-black'>
    <Header />
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg" alt="background-image" />
    </div>
    <form className='bg-black w-1/2 absolute text-white py-24' >
      <input type='text' placeholder='Email Address'  />
      <input type="text" placeholder='password' />
    </form>
    </div>
  )
}

export default Login