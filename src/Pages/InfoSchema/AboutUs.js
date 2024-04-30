import React from 'react'

export default function AboutUs() {
  return (
    <div className='flex h-screen justify-center text-center bg-gradient-to-r from-orange-500 from-10% to-neutral-950 to-90%'>
      <header className='bg-neutral-950 w-full '>
        <div className='flex justify-center items-center m-[10%]'>
        <img
          src={require('../../Images/Logo.png')}
          alt='Our Logo'
          className='h-[25%] w-[40%] text-center'
        />
        <p className="inset-x-0 bottom-0 text-center text-xl text-white font-semibold italic mt-1 ml-1">
              Car Repair Service
        </p>
        </div>
        <div className='my-3'>
          <p className='text-white p-2 text-justify w-[70%] ml-3 font-semibold text-lg'>
            Our app gives to customers the opportunity of choose the price and workshop.
          </p>
          <div className='my-5'>
            <a href='/' className='rounded-xl bg-gradient-to-r from-orange-400 to-neutral-900 p-2 px-4 text-center text-white font-semibold hover:from-neutral-900 hover:to-orange-400 shadow-lg hover:shadow-[#E6961D]'>
              Install Now
            </a>
          </div>
        </div>
      </header>
      <div className='h-[30%] w-full justify-center items-center mt-[5%] hidden sm:block hidden md:block lg:flex'>{/**Este div se ocultara segun resoluciones mas chicas*/}
        <h2 className='lg:text-6xl md:text-4xl sm:text-2xl text-white font-semibold font-sans drop-shadow-xl'>Car Repair Service</h2>
      </div>
      <aside className='m-4 text-white block lg:max-w-[40%]'>
        <article>
          Install our app for customers who are looking the best fix to his cars
        </article>
        <article className='m-4 md:block sm:block lg:flex justify-center items-center md:text-center'>
          Our brands especialist
          <img 
          className='h-[15%] w-[20%] p-2' 
          src={require('../../Images/Ford-Logo.png')} alt='Ford Brand'/> 
          <img 
          className='h-[15%] w-[20%] p-2' 
          src={require('../../Images/Chevrolet-Logo.png')} alt='Chevrolet Brand'/> 
          <img 
          className='h-[15%] w-[20%] p-2' 
          src={require('../../Images/Red-Dodge-Logo.png')} alt='Dodge Brand'/> 
        </article>
      </aside>
    </div>
  )
}
