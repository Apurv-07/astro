import {useNavigate} from 'react-router-dom'
import Herosection from '../components/Herosection';
import Modalnew from '../components/Modalnew';
import Card1 from '../components/Card1';
import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button';
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
            <Herosection pic={"https://english.cdn.zeenews.com/sites/default/files/2023/02/02/1148680-adiyogi-tw.jpg"} h1={"Pandit Din Dayal"} p={"Pandit Jagannath Guruji is a renowned and talented top Indian astrologer with extensive experience. He offers a genuine range of astrological counselling and fortune-telling with useful predictions in significant events of your life, such as career, employment, business, and finance, issues of health, wealth, and relationships across marriage and compatibility matters (kundali matching), and potent luck, fortune, face, and palm readings to help you successfully navigate life."}/>
        </div>
        {/* section 2 */}
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
                    <span className={`text-[30px] font-semibold font-serif ${text?"text-red-600":"text-yellow-300"}`}>Pandit Ji </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat tellus ut urna rutrum laoreet. Quisque eu nulla eu velit
        molestie cursus. Nunc ac sollicitudin lorem. Cras pharetra nisl vitae
        pellentesque viverra. Vestibulum varius purus at rutrum auctor. Sed a
        diam sed libero condimentum hendrerit vel in risus. Integer et leo id
        leo rutrum faucibus. Nulla aliquet dapibus nisl vel malesuada. Nunc
        pharetra aliquet est, eget vulputate dolor tincidunt vitae. Aliquam non
        lacus sagittis, ultricies lectus vitae, facilisis quam. Sed at diam quis
        metus congue lobortis. Integer faucibus ut felis nec iaculis. Aliquam et
        purus id nibh bibendum consectetur. Nam et vehicula dui, eget maximus
        neque. Integer ligula turpis, pharetra id orci ut, pretium gravida
        risus. Cras lacinia sodales ex in commodo. Nulla interdum eget nulla
        quis cursus. Ut eget leo eget risus elementum posuere. Vestibulum ac
        diam ac dolor commodo auctor. Vestibulum feugiat et enim consectetur
        elementum. Nunc in purus imperdiet, sollicitudin metus ac, varius
        libero. Morbi scelerisque urna id ante placerat posuere. Mauris eu
        consectetur libero. Donec justo leo, commodo in libero varius, facilisis
        eleifend risus. Phasellus scelerisque nisl in leo euismod facilisis.
        Donec vitae nulla vitae turpis iaculis commodo a sit amet orci. Nulla
        facilisi. Maecenas ut leo at arcu auctor lobortis. Aenean turpis massa,
        porttitor ac semper at, eleifend nec orci. Phasellus aliquam mi a nisi
        venenatis fringilla. Nullam turpis libero, lobortis ac ultrices vitae,
        pharetra non lorem. Quisque et libero efficitur, finibus arcu id,
        gravida velit. Mauris nec lacus sit amet ante porta imperdiet eu id
        odio. Curabitur ut varius lacus, eu accumsan orci. Suspendisse tempor
        eleifend est ut malesuada. Sed elementum tempor mi non rutrum. Vivamus</p>
                {/* </div> */}
                <Button styles={'-translate-x-1/2 ml-[50%]'} onClick={()=>setText(!text)}>See More</Button>
            </div>
        </div>
    </div>
  )
}

export default Home