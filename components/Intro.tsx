'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Intro() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === 'dark' ? 'bg-black' : 'bg-[#f1e8d5]'} flex flex-col-reverse md:flex-row justify-center items-center lg:justify-between lg:pl-16`}>
      <div className='text-white font-semibold flex flex-col items-start justify-center w-full md:w-1/2 gap-5 px-5 lg:w-2/5'>
        <span className={`${theme === 'dark' ? 'text-white' : 'text-amber-800'} text-md md:text-2xl tracking-[8px]`}>HELLO!</span>
        <span className={`${theme === 'dark' ? 'text-white' : 'text-amber-950'} font-mono text-xl md:text-3xl lg:text-[42px]`}>This is YUVARAAJ here</span>
        <div className={`${theme === 'dark' ? 'text-white' : 'text-amber-800'} text-justify text-sm lg:text-lg font-poppins tracking-wider lg:tracking-widest leading-9 lg:leading-loose`}>
          I&apos;m a versatile software developer with experience in building scalable web apps, efficient back-end systems, and intuitive UIs. I thrive on solving problems and adapting to new technologies to deliver high-quality, innovative solutions.
        </div>
      </div>

      <div className='flex w-full md:w-1/2 justify-center items-center'>
        <Image src={theme === 'dark' ? `/dark-profile.png` : `/light-profile.png`} width={550} height={50} alt='profile' />

      </div>

    </div>
  )
}
