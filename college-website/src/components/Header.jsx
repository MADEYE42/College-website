import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='bg-slate-50 text-blue-800 font-bold p-2'>
      <div className='flex justify-between items-center'>
        <img src="https://vesit.ves.ac.in/navlogo.PNG" alt="logo" width={300} className="w-32 sm:w-48 lg:w-72" />
        <div className='hidden md:block'>
          <ul className='flex gap-4 items-center p-2'>
            <li className='hover:scale-110 duration-300'>Admission</li>
            <li className='hover:scale-110 duration-300'>Autonomy</li>
            <select name="info" id="" className='hover:outline-none bg-transparent'>
              <option value="">College Information</option>
              <option value="">Newsletters</option>
              <option value="">Facilities</option>
              <option value="">Gallery</option>
              <option value="">Blog</option>
            </select>
            <select name="info" id="" className='hover:outline-none bg-transparent'>
              <option value="">Ratings</option>
              <option value="">NAAC</option>
              <option value="">NBA</option>
              <option value="">NIRF</option>
              <option value="">AICTE</option>
              <option value="">PRME</option>
            </select>
            <li className='hover:scale-110 duration-300'>MHRD Initiative</li>
            <li className='hover:scale-110 duration-300'>Contact Us</li>
            <li className='bg-blue-800 text-white p-2 rounded-md hover:scale-105 duration-300'>Virtual Tour</li>
          </ul>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-blue-800 hover:text-blue-900'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col gap-4 items-center p-2'>
            <li className='hover:scale-110 duration-300'>Admission</li>
            <li className='hover:scale-110 duration-300'>Autonomy</li>
            <select name="info" id="" className='hover:outline-none bg-transparent'>
              <option value="">College Information</option>
              <option value="">Newsletters</option>
              <option value="">Facilities</option>
              <option value="">Gallery</option>
              <option value="">Blog</option>
            </select>
            <select name="info" id="" className='hover:outline-none bg-transparent'>
              <option value="">Ratings</option>
              <option value="">NAAC</option>
              <option value="">NBA</option>
              <option value="">NIRF</option>
              <option value="">AICTE</option>
              <option value="">PRME</option>
            </select>
            <li className='hover:scale-110 duration-300'>MHRD Initiative</li>
            <li className='hover:scale-110 duration-300'>Contact Us</li>
            <li className='bg-blue-800 text-white p-2 rounded-md hover:scale-105 duration-300'>Virtual Tour</li>
          </ul>

        </div>
      )}
    </div>
    <div className='flex justify-between items-center p-2 bg-blue-800 h-[4rem]  text-white'>
        <div className='flex flex-col items-center'>
        <ul className='flex gap-4 items-center p-2'>
          <label htmlFor="info">About</label>            
            <select name="info" id="" className='hover:outline-none bg-transparent'>
              <div>
                <option value="">
                <ul>
                <li>About Us</li>
                <li>Vision & Mission</li>
                <li>Institutional Distinctiveness</li>
                <li>Best Practices</li>
              </ul>
                </option>
              
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              </div>
              
            </select>
            <select name="info" id="" className='hover:outline-none bg-transparent '>
              <option  className='text-black' value="">Ratings</option>
              <option className='text-black' value="">NAAC</option>
              <option className='text-black' value="">NBA</option>
              <option className='text-black' value="">NIRF</option>
              <option className='text-black' value="">AICTE</option>
              <option className='text-black' value="">PRME</option>
            </select>
            <li className='hover:scale-110 duration-300'>Feedback</li>
            <li className='hover:scale-110 duration-300'>Careers</li>
          </ul>

        </div>
        <div>

        </div>
    </div>
    </div>
    
  )
}

export default Header
