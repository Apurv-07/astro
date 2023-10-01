import {useNavigate} from 'react-router-dom'
import Herosection from '../components/Herosection';
import Modalnew from '../components/Modalnew';
import Card1 from '../components/Card1';
import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button';
import YoutubeCard from '../components/YoutubeCard';
import cardData from '../data/cardData';
import Card2 from '../components/Card2';

const Home = () => {
    let nav=useNavigate();
    let [isOpen, setIsOpen] = useState(false)
    let [text, setText]=useState(false)
    let [y, setY]=useState(0)
    useEffect(()=>{
        // console.log(ref)
        window.addEventListener('scroll', ()=>{
          setY(window.scrollY);
        })
      }, )
  return (
    <div>
        {/* section 1 */}
        <div className=''>
            <Herosection pic={"https://english.cdn.zeenews.com/sites/default/files/2023/02/02/1148680-adiyogi-tw.jpg"} h1={"Pandit Chandra Bhushan Mishra"} p={"Pandit Chandra Bhushan Mishra is a renowned and talented top Indian astrologer with extensive experience. He offers a genuine range of astrological counselling and fortune-telling with useful predictions in significant events of your life, such as career, employment, business, and finance, issues of health, wealth, and relationships across marriage and compatibility matters (kundali matching), and potent luck, fortune, face, and palm readings to help you successfully navigate life."}/>
        </div>
        {/* section 2 */}
        <div className='md:px-10 px-4 -mt-[450px] max-sm:-mt-[480px]'>
            <div className=''>
            <h2 className='text-[24px] font-inter font-semibold border-orange-300 border-solid border-y-4'>Are you looking for impactful, long-lasting astrological solutions? Are you seeking a powerful ally who can offer you guidance and help you fulfil your dreams?</h2>
            <p className='mt-5 font-inter'>Are you trying to find long-lasting, effective astrological remedies? Are you looking for a strong ally that can mentor you and assist you in realising your goals?
                One of the top astrologers in India, Pandit Chandra Bhushan Mishra is a well-known astrologer with a wealth of astrological knowledge. His goals are clear-cut. His predictions are reliable and accurate, and his counsel is consistently goal-oriented. He makes sure to give them the solutions they need because he is aware of the vulnerabilities people encounter in their daily life. For more information on Panditjis services, read on.</p>
                <div className='flex justify-evenly mt-5 flex-wrap max-sm:gap-4'>
                    {cardData.map((item)=>{
                        return <Card2 item={item} />
                    })}
                </div>
                <Button styles={'-translate-x-1/2 ml-[50%]'} onClick={()=>nav('/services')}>Explore more</Button>
                
            </div>
        </div>
        {/* section 3 */}
        <div className={`mt-10 bg-gradient-to-r from-orange-300 to-yellow-600 flex max-md:flex-col md:gap-20 -ml-10 transition-all duration-1000 rounded-3xl ${y>720?"ml-10 mr-10":""}`}>
            {/* Photo */}
            <div className={`py-10 -mt-40 transition-all duration-1000 inline-block ${y>720 && "mt-0"}`}>
                <img src="/assets/Pandit_ji_profile.jpeg" alt="Pandit ji" className='w-[400px] h-[500px] rounded-r-[40%]'/>
            </div>
            {/* Description  */}
            <div className={`md:w-[50%] transition-all bg-[rgba(0,0,0,0.2)] my-10 ${!text?"h-[490px]":""}`}>
                {/* <div className='bg-[rgba(0,0,0,0.2)] relative text-ellipsis max-h-[500px] rounded-xl sm:ml-16 text-center max-sm:w-full px-5 overflow-hidden text-white'> */}
                {/* <div className='h-[500px] overflow-hidden'> */}
                <p className={`text-center text-ellipsis p-10 w-full text-white shadow-sm ${text?"relative w-[100%] bg-yellow-300":"overflow-hidden h-[375px]"}`}>
                    <span className={`text-[30px] font-semibold font-serif ${text?"text-red-600":"text-yellow-300"}`}>Pandit Chandra Bhushan Mishra </span>welcomes you to his cosmic realm, where the stars align and the mysteries of the universe unveil. Explore the infinite possibilities of your life's journey as you embark on a celestial voyage guided by the profound wisdom and insight of an experienced astrologer.

In this enchanting portfolio, you will discover the art and science of astrology through the eyes of a seasoned practitioner. Pandit Chandra Bhushan Mishra weaves together the intricate tapestry of your birth chart, illuminating your path with the radiant light of the celestial bodies. With a deep understanding of planetary movements, lunar phases, and cosmic energies, Pandit Chandra Bhushan Mishra offers you personalized guidance and enlightenment.

Whether you seek answers about your relationships, career, or inner self, Pandit Chandra Bhushan Mishra will provide you with celestial keys to unlock the doors of self-discovery and empowerment. Each consultation is a unique cosmic dialogue, a sacred space where the secrets of the stars reveal themselves.

Explore the celestial wonders of your existence with Pandit Chandra Bhushan Mishra and embark on a transformative journey through the cosmos. Embrace the power of the stars and planets to navigate life's challenges and embrace its abundant opportunities. Your destiny awaits, written in the constellations, and Pandit Chandra Bhushan Mishra is your trusted celestial guide.</p>
                {/* </div> */}
                <Button styles={'-translate-x-1/2 ml-[50%]'} onClick={()=>setText(!text)}>See More</Button>
            </div>
        </div>
        {/* section 4 */}
        <div className='px-4 md:px-10 mb-20'> 
        <h2 className="text-[24px] mt-10 font-inter font-semibold border-orange-300 border-solid border-b-4">
            Popular posts:
        </h2>
        <div className='flex gap-4 whitespace-nowrap overflow-auto no-scrollbar mt-10'>
        <style>
        {`.no-scrollbar::-webkit-scrollbar {
            display: none;
        }`}
      </style>
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
            <YoutubeCard link={'https://www.youtube.com/embed/tgbNymZ7vqY'} />
        </div>
        </div>
    </div>
  )
}

export default Home