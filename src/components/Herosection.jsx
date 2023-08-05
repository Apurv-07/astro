// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Herosection = (props) => {
  // eslint-disable-next-line react/prop-types
  const {pic, h1, p}=props;

  const navigate=useNavigate();


  // navigate to contact page
  const handleBook=()=>{
    navigate('/contact-us')
  }


  return (
    <>
    <div className='relative w-full -top-[140px] -z-10 bg-orange-500 mix-blend-darken'>
        {/* <img className='h-[100vh] w-[100vw] object-cover max-sm:object-[78%]' src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg" alt="bg-image" /> */}
        <img className='h-[700px] w-[100vw] object-cover max-sm:object-[72%] bg-orange-300 mix-blend-screen' src={pic} alt="bg-image" />
    </div>
    <div className='bg-[rgba(0,0,0,0.2)] relative -top-[600px] rounded-xl w-1/2 sm:ml-16 text-center py-12 max-sm:w-full px-5 max-sm:-top-[700px]'>
        <h1 className='text-[40px] text-white font-bold font-inter max-sm:text-[30px]'>{h1}</h1>
        <p className='text-white'>{p}</p>
        <button className='bg-white mt-7 py-2 px-4 rounded-md' onClick={handleBook}>Book meeting</button>
    </div>
    </>
  )
}

export default Herosection