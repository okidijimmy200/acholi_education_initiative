import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Background from '../components/Background'
import '../index.css'

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-x-4'>
        <div className='col-span-12 bg-slate-200'><Navbar /></div>
        <div className='col-span-12'><Background /></div>
        <div className='col-span-12 bg-[#f7f7f7]'><About /></div>
        <div className='col-span-12'><Contact /></div>
        <div className='col-span-12 bg-gray-700'><Footer /></div>
    </div>
  )
}
