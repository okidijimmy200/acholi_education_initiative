import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between py-[2.5rem] px-[5px]'>
        <div className='text-black'>Acholi Education Initiative</div>
        <div className='flex'>
            <div className='mr-[10px] cursor-pointer'>About Us</div>
            <div className='mr-[10px] cursor-pointer'>Programmes</div>
            <div className='mr-[10px] cursor-pointer'>Contact</div>
            <div className=''>Support Us</div>
        </div>
    </div>
  )
}
