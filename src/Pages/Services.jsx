// import React from 'react'
import Herosection from "../components/Herosection"
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";
const reports = [
  {
    title: "Love Success Mantra",
    paragraph: "Being in love is the best thing to happen to anyone but do you know the mantra behind a successful love story? Seek Panditji’s advice."
  },
  {
    title: "Health & Wellness",
    paragraph: "Good health, mental, emotional and physical wellness makes life enjoyable and helps with success. Get the best remedies for long lasting health from Panditji."
  },
  {
    title: "Marriage Compatibility",
    paragraph: "Marriage is one of the most beautiful relations, and compatibility is a crucial factor in every marriage. Every marriage has its ups and downs, but sailing through them is necessary to make it work. Seek Panditji’s advice to get through the hurdles."
  },
  {
    title: "Education & Job Opportunities",
    paragraph: "Do you consider yourself lacking in opportunities for education and employment? Seek Panditji's guidance and get guaranteed results."
  },
  {
    title: "Husband & Wife Problems",
    paragraph: "Marital arguments are common, but sustaining a marriage is what signifies the bond a couple shares. Sailing through the problems and coming out strong strengthens a marriage. Consult Panditji for more."
  },
  {
    title: "Love & Marriage",
    paragraph: "Marrying the person who you are in love with is a dream for all. Consult Panditji to know how to fulfil this dream."
  },
  {
    title: "Future Predictions",
    paragraph: "Discover your future in the present time with accuracy and precision and take the right steps ahead to enjoy a good life. Consult Panditji for more."
  },
  {
    title: "Relationship Problems",
    paragraph: "Hustle and tussle are common in relationships. Lead a happy life together by consulting with Panditji."
  },
  {
    title: "Family Problems",
    paragraph: "Maintaining a work-life balance is tough which leads to various family problems as well. Worry no more and consult Panditji for solutions."
  }
];

console.log(reports);

const Services = () => {
  let nav=useNavigate();
  return (
    <div>
      <Herosection pic={"https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg"} h1={"My services"} p={"Meet with Pandit Jagannath Guruji, in person or online for a holistic consultation. Let Panditji help you amplify the happiness and prosperity in your life through his deep knowledge of Vedic astrology, palmistry, body vibrations and face reading for an enhanced life."} />
      <div className='px-10 -mt-[400px]'>
            <div className=''>
            <h2 className='text-[24px] font-inter font-semibold border-orange-300 border-solid border-b-4'>Get accurate solutions</h2>
            <p className='mt-5 font-inter'>Consult Panditji today. Access powerful solutions for your problems. Live the life you were meant to by clearing obstacles and negativities!</p>
                <div className='flex justify-evenly mt-5 flex-wrap max-sm:gap-4'>
                    {reports.map((item, i)=>{
                      return <ServiceCard key={i} heading={item.title} para={item.paragraph} />
                    })}
                </div>
                <button className='bg-orange-500 text-white mt-7 py-2 px-4 rounded-md ml-[50%] -translate-x-1/2' onClick={()=>nav('/contact-us')}>Book Meeting</button>
            </div>
        </div>
    </div>
  )
}

export default Services