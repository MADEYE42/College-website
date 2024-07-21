import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-50 text-blue-700 font-bold p-2' >
        <div className='flex justify-between items-center'>
            <img src="https://vesit.ves.ac.in/navlogo.PNG" alt="logo"  width={300}/>
            <div>
            <ul className='flex gap-4 items-center p-2'>
                <li className='hover:scale-110 duration-300'>Admission</li>
                <li className='hover:scale-110 duration-300'>Autonomy</li>
                <select name="info" id="" className='hover:outline-none bg-transparent' >
                  <option value="">College Information</option>
                  <option value="">Newsletters</option>
                  <option value="">Facilities</option>
                  <option value="">Gallery</option>
                  <option value="">Blog</option>
                </select>
                <select name="info" id="" className='hover:outline-none bg-transparent' >
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
              
        </div>
    </div>
  )
}

export default Header