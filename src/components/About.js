import React from 'react'
import { MdGroups} from 'react-icons/md'
import { MdPlace } from 'react-icons/md'
import { FaSlackHash } from 'react-icons/fa'
import './css/grids.css'

export default function About() {
  return (
    <div className='p-[2rem]'>
      <div className="about">
        <div className='flex flex-col rounded-md bg-white p-[1rem]'>
          <div className='relative w-[50%] m-auto text-center'>
              <MdGroups style={{height: '4rem', width: '4rem', margin: '0 auto'}}/>
          </div>
          <div className='text-center text-[1.8rem] leading-[1.125] text-[#00345c] mb-[1rem]'>
            <h2>WE INVEST IN CHILDREN.</h2>
          </div>
          <div className='text-justify'>
            <p>People bring powerful ideas to life.
           We identify, encourage and equip talented leaders to lift the collective prospects of our planet. 
           We spot potential and invest in people who turn big ideas into big impact.</p>
          </div>
        </div>
        <div className='flex flex-col rounded-md bg-white p-[1rem]'>
        <div className='relative w-[50%] m-auto text-center'>
              <MdPlace style={{height: '4rem', width: '4rem', margin: '0 auto'}}/>
          </div>
          <div className='text-center text-[1.8rem] leading-[1.125] text-[#00345c] mb-[1rem] w-[80%] m-auto'>
            <h2>WE IGNITE CHANGE.</h2>
          </div>
          <div className='text-justify'>
            <p>We support innovative African startup businesses as they blossom to positively touch the lives of millions. 
              We are transforming the role of tomorrow’s engineer, with a view towards greater social impact. 
              .</p>
          </div>
        </div>
        <div className='flex flex-col rounded-md bg-white p-[1rem]'>
        <div className='relative w-[50%] m-auto text-center'>
              <FaSlackHash style={{height: '4rem', width: '4rem', margin: '0 auto'}}/>
          </div>
          <div className='text-center text-[1.8rem] leading-[1.125] text-[#00345c] mb-[1rem] w-[80%] m-auto'>
            <h2>WE FOSTER A COMMUNITY.</h2>
          </div>
          <div className='text-justify'>
            <p>
            EWB is a vibrant community of thousands 
            of innovative students, professionals and fellows working to create systemic change in Canada and sub-Saharan Africa.
            People bring powerful ideas to life.
            </p>
          </div>
        </div>
    </div>

    </div>
  )
}
