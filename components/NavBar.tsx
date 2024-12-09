import React from 'react'

export default function NavBar() {
  return (
    <div className='flex flex-row justify-between gap-4'> 
        <div className='bg-blue-400'>Logo/Signature pic</div>
        <div className='bg-blue-400'>
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
        <div className='bg-blue-400'>Theme button</div>
    </div>
  )
}
