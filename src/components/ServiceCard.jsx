// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const ServiceCard = ({heading, para}) => {
  return (
    <div>
        <div className='flex flex-col cursor-pointer bg-orange-300 rounded-lg w-[373px] h-[475px] mt-10 max-sm:w-[300px] hover:bg-orange-100'>
            <img className='rounded-lg' src={"https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg"} alt='card-image' />
            <div className='p-5  overflow-auto'>
                <h1 className='text-[20px] font-inter font-bold'>{heading}</h1>
                <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard