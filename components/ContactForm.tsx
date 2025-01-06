"use client"
import React from 'react'
import { FaFolder } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const ContactForm = () => {

  

  return (
    <div className='flex h-fit w-full bg-gray-800 flex-col px-14'>
        <div className='text-white bg-gray-700 w-1/2 py-1 items-center h-fit flex flex-row rounded-t-lg justify-between px-2'>
            <div className='flex flex-row gap-2'>
                <div className='rounded-full bg-green-700 w-3 h-3'></div>
                <div className='rounded-full bg-amber-400 w-3 h-3'></div>
                <div className='rounded-full bg-rose-600 w-3 h-3'></div>
            </div>
            <div className='flex flex-row items-center gap-2'>
                {/* <FaHome /> */}
                <FaFolder />
                <div className='text-white font-ubuntu_mono font-bold'>home/yuvaraaj</div>
            </div>
            <BsThreeDots size={28}/>
        </div>
        <div className='flex h-[500px] bg-gray-700 border-t-[1px] w-1/2 py-4 px-3'>
          <div className='text-white font-ubuntu_mono tracking-wider flex items-center w-fit h-fit' >
            <div className='flex flex-row items-center gap-3'>
              <span className='min-w-fit'>guest@contact.me ~ %</span>
              <p>{"Hello All"}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactForm