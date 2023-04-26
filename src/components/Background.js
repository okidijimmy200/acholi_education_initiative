import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../index.css'

export default function Background() {
  const slideImages = [
    {
      url: require('../assets/Images/educ.jpg'),
      caption: 'Investing in our children'
    },
    {
      url: require('../assets/Images/educ-2.jpg'),
      caption: 'Building for the future'
    }
  ];
  return (
    <>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='Img' style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <div className='relative w-[50%] m-auto top-[50vh] text-center'>
                    <h2 className='text-[4rem] text-white font-serif font-black'>{slideImage.caption}</h2>
                  </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
  )
}
