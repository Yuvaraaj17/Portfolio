import React from 'react'

export default function NavBar() {
  return (
    <div className='flex flex-row justify-between gap-7 bg-black p-5'> 
        <div className='bg-blue-400 w-10 h-10'>Logo/Signature pic</div>
        <div className='flex bg-green-200 w-full justify-end'>
          <div className='bg-blue-400 flex flex-row gap-24 text-[22px] justify-center items-center font-mono tracking-wide'>
              <div>About</div>
              <div>Skills</div>
              <div>Projects</div>
              <div>Contact</div>
          </div>
        </div>
        <div className='bg-blue-400 w-10 h-10'>Theme button</div>
    </div>
  )
}
