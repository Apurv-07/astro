import React from 'react'

const YoutubeCard = ({link}) => {
  return (
    <div>
        <iframe className='w-[420px] h-[345px] max-md:w-[320px] rounded-lg hover:shadow-2xl hover:scale-75 hover:shadow-blue-900' width="420" height="345" src={`${link}`}></iframe>
    </div>
  )
}

export default YoutubeCard