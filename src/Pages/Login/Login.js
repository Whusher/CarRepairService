import React from 'react'

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center h-screen bg-neutral-950">
    {/* <!-- Left: Image --> */}
    <div className="w-1/2 h-screen hidden lg:block bg-white max-h-screen overflow-hidden">
      <h3 className='text-center text-2xl font-bold font-sans italic mt-24 p-3'>The car of your dreams deserves a great garage with low prices</h3>
      <div className='w-full h-full'>{/**Parent for no rupture */}
      <div className='relative h-full'>
        <img
          src={require('../../Images/Car.png')}
          alt=""
          className="absolute inset-x-0 top-[-20%] w-350 h-1/2 mx-auto z-10"
        />
        <div className='h-1/2 w-full transform skew-y-12 bg-orange-400 mt-80'>{/**First structure by AA triangle */}
          {/* Your content */}
        <div className='absolute inset-x-0 top-60 w-full h-full bg-orange-500 transform skew-y-6'>{/**Second Structure by AA */}
          {/* Your content */}
        </div>
        </div>
      </div>    
      </div>
    </div>
    {/* <!-- Right: Login Form --> */}
    <div className="lg:p-36 md:p-52 sm:20 p-3 w-full lg:w-1/2 bg-neutral-950">
      <h1 className="text-8xl font-sans font-semibold mb-5 text-white text-center">CAR REPAIR SERVICE</h1>
      <form action="#" method="POST" className='p-5 m-5'>
        {/* <!-- Username Input --> */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-white mb-4">
            Email
          </label>
          <input
            onChange={()=>{}}
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* <!-- Password Input --> */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-4">
            Password
          </label>
          <input
            onChange={()=>{}}
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* <!-- Forgot Password Link --> */}
        <div className="mb-6 text-blue-500">
          <a
            href="mailto:syncro_cargo@gmail.com"
            className="hover:underline text-orange-400"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      {/* <!-- Login Button --> */}
      <div className='text-center'>
      <button
        onClick={()=>{}}
        className="bg-orange-400 hover:bg-blue-600 text-black font-bold p-8 rounded-md py-2 px-5 w-1/2"
      >
        SIGN IN
      </button>
      </div>
      {/* <!-- Sign up  Link --> */}
      <div className="mt-6 text-blue-500 text-center">
        <p className="text-white">
          Have you a mechanical workshop?{' '}
          <a
            href="mailto:syncro_cargo@gmail.com" 
            className="hover:underline text-orange-600"
          >
            Register now
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}
