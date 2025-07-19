import React, { useState } from 'react'
import Header from './Header'
import { z } from 'zod'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()


  const userSchema = z.object({
    name: isSignInForm ? z.optional(z.string()) : z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(4, "Password minimum length should be 4")
  })

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm)
    setErrors({})
    setFormData({ name: '', email: '', password: '' })
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })

  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = userSchema.parse({
        name: isSignInForm ? undefined : formData.name,
        email: formData.email,
        password: formData.password,
      });

      setErrors({});

      if (!isSignInForm) {
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user", user)
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors({ firebase: errorMessage }); // Use a consistent key like 'firebase'
          });

          


      } else {
        // Sign In Logic
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors({ firebase: errorMessage }); // Use the same key
          });
          

      }



    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (typeof issue.path[0] === 'string') {
            newErrors[issue.path[0]] = issue.message;
          }
        });
        setErrors(newErrors);
      }
    }
  }
  return (
    <div className='bg-gradient-to-b from-black'>
      <Header />
      <div className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg)',
        }}
      />
      <form className='bg-black opacity-90 text-black my-24 py-12 absolute flex flex-col w-1/3 justify-center items-center my-36  mx-auto left-0 right-0 gap-4 text-white rounded-md' onSubmit={handleSubmit} >
        <div className='w-2/3 text-left m-2'>
          <p className='text-white text-4xl  font-bold'>  {isSignInForm ? "Sign In" : "Sign Up"}  </p>
        </div>
        {!isSignInForm &&
          <>
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              value={formData.name}
              onChange={handleInputChange}
              className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm'
            />
            <div className='w-2/3 -mt-5'>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          </>
        }

        <input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleInputChange}
          className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm'
        />
        <div className='w-2/3 -mt-5'>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <input
          type="password"
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
          className='px-2 py-3 m-2 border border-white w-2/3 rounded-sm'
        />
        <div className='w-2/3 -mt-5'>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button className='bg-red-800 text-white w-2/3 px-6 py-2 font-semibold rounded-sm cursor-pointer'>
          {isSignInForm ? 'Sign In ' : 'Sign Up'}
        </button>
        {errors.firebase && (
          <p className="text-red-500 text-sm">{errors.firebase}</p>
        )}
        <div className='w-2/3 text-left m-2 cursor-pointer' onClick={handleToggleForm}>
          {isSignInForm ? <p className='text-lg'>New to Netflix? <span className='font-bold '>Sign up now.</span> </p> : <p className='text-lg'>Already registered? <span className='font-bold '>Sign in now.</span> </p>}
        </div>
      </form>
    </div>
  )
}

export default Login