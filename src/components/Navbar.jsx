import React from 'react'


function Navbar() {
  return (
    <div className='bg-slate-700 flex justify-between h-20 w-full'>
        <div className='text-3xl text-white pl-12 pt-6 flex justify-center'>
          <h1 className='text-4xl cursor-pointer'>🎦</h1>
            <h1 className='cursor-pointer'>AnimeMovies List</h1>
        </div>

        <ul className=' text-center text-xl flex justify-between items-center gap-10 text-white pe-14'>
          <li className='w-[70px] hover:bg-orange-400 hover:cursor-pointer rounded-md'>Home</li>
          <li className='w-[70px] hover:bg-orange-400 hover:cursor-pointer rounded-md'>About</li>
          <li className='w-[70px] hover:bg-orange-400  hover:cursor-pointer rounded-md'>Blogs</li>
          <li className='w-[110px] hover:bg-orange-400 hover:cursor-pointer rounded-md'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar