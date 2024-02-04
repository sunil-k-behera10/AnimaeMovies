import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-500 w-full h-[168px] pl-20 pt-2 text-white'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <div className='mb-5 hover:cursor-pointer'>
            <h4 className='font-bold w-36 hover:bg-sky-300 hover: rounded-md'>AnimaeMovies</h4>
            A123 Lost Street,<br/>
            Navi Mumbai, Maharashtra <br/>
            PB12345, INDIA <br/>
            Phone: 476526496<br/>
            Email id: sdfsgvs@gmail.com<br/>
          </div>
          <div className='mb-5 pl-9 hover:cursor-pointer'>
            <h4 className='font-bold w-24 hover:bg-sky-300 hover: rounded-md'>Movie Links</h4>
            <ul>
              <li>Top Movies</li>
              <li>Animated Movies</li>
              <li>Action Movies</li>
              <li>Sci-fi Movies</li>
              <li>Adventure Movies</li>
            </ul>
          </div>
          <div className='mb-5 pl-9 hover:cursor-pointer'>
            <h4 className='font-bold w-24 hover:bg-sky-300 hover: rounded-md'>Our Services</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='mb-5 hover:cursor-pointer'>
            <h4 className='font-bold w-32 hover:bg-sky-300 hover: rounded-md'>Customer Care</h4>
              <ul>
                <li>Join our Website</li>
                <li>Customer Services</li>
                <li>Graphic Design</li>
                <li>24x7 Services</li>
                <li>Visit our Website</li>
              </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer