// import React from 'react'
import {useNavigate} from 'react-router-dom'
import Herosection from '../components/Herosection';
import Card1 from '../components/Card1';
const Home = () => {
    let nav=useNavigate();
  return (
    <div>
        <div className=''>
            <Herosection pic={"https://english.cdn.zeenews.com/sites/default/files/2023/02/02/1148680-adiyogi-tw.jpg"} h1={"Pandit Din Dayal"} p={"Pandit Jagannath Guruji is a renowned and talented top Indian astrologer with extensive experience. He offers a genuine range of astrological counselling and fortune-telling with useful predictions in significant events of your life, such as career, employment, business, and finance, issues of health, wealth, and relationships across marriage and compatibility matters (kundali matching), and potent luck, fortune, face, and palm readings to help you successfully navigate life."}/>
        </div>
        <div className='px-10 -mt-[450px] max-sm:-mt-[480px]'>
            <div className=''>
            <h2 className='text-[24px] font-inter font-semibold border-orange-300 border-solid border-y-4'>Are you looking for impactful, long-lasting astrological solutions? Are you seeking a powerful ally who can offer you guidance and help you fulfil your dreams?</h2>
            <p className='mt-5 font-inter'>Are you trying to find long-lasting, effective astrological remedies? Are you looking for a strong ally that can mentor you and assist you in realising your goals?
                One of the top astrologers in India, Pandit Jagannath Guruji is a well-known astrologer with a wealth of astrological knowledge. His goals are clear-cut. His predictions are reliable and accurate, and his counsel is consistently goal-oriented. He makes sure to give them the solutions they need because he is aware of the vulnerabilities people encounter in their daily life. For more information on Panditjis services, read on.</p>
                <div className='flex justify-evenly mt-5 flex-wrap max-sm:gap-4'>
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                </div>
                <button className='bg-orange-500 text-white mt-7 py-2 px-4 rounded-md ml-[50%] -translate-x-1/2' onClick={()=>nav('/services')}>Explore more</button>
            </div>
        </div>
    </div>
  )
}

export default Home