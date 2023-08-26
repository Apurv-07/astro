// import React from 'react'
import Herosection from "../components/Herosection";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "nuka-carousel";
import puja from "../assets/puja.jpg";
import career from "../assets/career.jpg";
import child from "../assets/child.jpg";
import future from "../assets/future.jpg";
import wealth from "../assets/wealth.jpg";
import health from "../assets/health.jpg";
import business from "../assets/business.jpg";
import marriage from "../assets/love_marriage.jpg";
import love from "../assets/love_life.png";
import satyanarayanPuja from "../assets/satyanarayana_pooja.jpg";
import durgaPuja from "../assets/durga_puja.jpg";
import grihaPravesh from "../assets/griha_pravesh.jpg";
import mahaMrityunjaya from "../assets/mahamrityunjaya.jpg";
import Card2 from "../components/Card2";
import { useEffect, useState } from "react";

const reports = [
  {
    title: "Love",
    paragraph:
      "With our expert astrologer and his unique consultation, you can now improve your love life and experience the best love life you have ever had.",
    image: love,
  },
  {
    title: "Marriage",
    paragraph:
      "Now get 100% solution of any kind of issues related to your married life by following very easy steps as directed by our Jyotish Acharya.",
    image: marriage,
  },
  {
    title: "Business",
    paragraph:
      "Want to see your business grow every day? And to know when and which business to do according to astrology, contact our astrologer now.",
    image: business,
  },
  {
    title: "Future",
    paragraph:
      "Do you want to know accurate prediction about your future and upcoming life then take detailed consultation with our astrologer now.",
    image: future,
  },
  {
    title: "Career",
    paragraph:
      "Are you having instability in your career and not getting proper career growth, consult a leading astrology consultant now for complete solution and get continuous growth.",
    image: career,
  },
  {
    title: "Health",
    paragraph:
      "If you are looking for Vedic solution for health problem, stress or health then consult our astrologer for better and complete solution.",
    image: health,
  },
  {
    title: "Wealth",
    paragraph:
      "Money is essential for life and if you always have loss of money or are not able to control money then contact us for immediate solution.",
    image: wealth,
  },
  {
    title: "Pooja",
    paragraph:
      "Provides various types of Vedic Pooja and Jaap solutions. Contact us directly for more details.",
    image: puja,
  },
  {
    title: "Child",
    paragraph:
      "You do not have children and are helpless from all sides. Consult our astrology for Vedic solution, it will solve your problem and give 100% result.",
    image: child,
  },
];

console.log(reports);

const typeOfPuja = [
  {
    title: "Griha Pravesh",
    content: `In the rich tapestry of Hindu culture, rituals hold a special place, seamlessly weaving spirituality into everyday life. One such significant ritual is "Grihapravesha", a sacred ceremony that marks the commencement of a new journey within the walls of a new home. Rooted in ancient tradition and philosophy, Grihapravesha is more than just a housewarming event; it's a celebration of new beginnings, blessings, and the seamless integration of the spiritual and physical realms.`,
    image: grihaPravesh,
  },
  {
    title: "Satyanarayan Puja",
    content: `Satyanarayan Puja is a sacred Hindu ritual dedicated to Lord Satyanarayan, an embodiment of Lord Vishnu. This puja is a practice of expressing gratitude, seeking blessings, and invoking the divine presence for the well-being and prosperity of the family. The puja is not only a spiritual event but also a cultural tradition that brings families and communities together in a spirit of devotion and celebration.`,
    image: satyanarayanPuja,
  },
  {
    title: "Maha Mrityunjaya",
    content: `The Maha Mrityunjaya Mantra, also known as the Tryambakam Mantra, is a powerful and ancient Sanskrit mantra from the Rigveda. It is one of the most revered and recited mantras in Hinduism. The mantra is dedicated to Lord Shiva, the deity associated with transformation, healing, and destruction. It is often chanted to seek protection, healing, and liberation from the cycle of birth and death.

    The Maha Mrityunjaya Mantra is as follows:
    
    ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात् ||`,
    image: mahaMrityunjaya,
  },
  {
    title: "Durga puja",
    content: `Durga Puja, one of the most vibrant and significant festivals in Hinduism, is a celebration of the divine feminine power and the triumph of good over evil. Also known as Sharad Navaratri, this festival spans nine nights and is observed with immense fervor and joy in various parts of India and around the world. Durga Puja is a time when communities come together to worship Goddess Durga, revel in cultural festivities, and embrace the spirit of unity and devotion.`,
    image: durgaPuja,
  },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div>
      <Herosection
        pic={"https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg"}
        h1={"My services"}
        p={
          "Meet with Pandit Jagannath Guruji, in person or online for a holistic consultation. Let Panditji help you amplify the happiness and prosperity in your life through his deep knowledge of Vedic astrology, palmistry, body vibrations and face reading for an enhanced life."
        }
      />
      <div className="px-10 max-sm:px-5 -mt-[400px]">
        <div className="">
          <h2 className="text-[24px] font-inter font-semibold border-orange-300 border-solid border-b-4">
            Get accurate solutions
          </h2>
          <p className="mt-5 font-inter">
            Consult Panditji today. Access powerful solutions for your problems.
            Live the life you were meant to by clearing obstacles and
            negativities!
          </p>
          <div className="mb-10 px-20 max-sm:px-0">
            <Carousel
              autoplay={true}
              enableKeyboardControls={true}
              slidesToShow={isMobile ? 1 : 2}
              animation="zoom"
              zoomScale={0.8}
              cellAlign="center"
              wrapAround={true}
              defaultControlsConfig={{
                containerClassName: `-m-10 max-sm:mx-0`,
                pagingDotsClassName: "relative ml-3 hover:scale-150",
                nextButtonClassName: "rounded hover:scale-110",
                prevButtonClassName: "rounded hover:scale-110",
                nextButtonText: <FaArrowRight />,
                prevButtonText: <FaArrowLeft />,
              }}
            >
              {reports.map((item, i) => {
                return (
                  <ServiceCard
                    key={i}
                    heading={item.title}
                    para={item.paragraph}
                    image={item.image}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="mt-28 mb-10 px-20 gap-16 flex flex-col max-sm:px-0">
            <h2 className="text-center font-bold text-2xl">TYPES OF PUJA</h2>
            <div className="flex flex-wrap gap-8 max-sm:gap-16">
              {typeOfPuja.map((puja) => {
                return <Card2 item={puja} />;
              })}
            </div>
          </div>

          {/* <button className='bg-orange-500 text-white mt-7 py-2 px-4 rounded-md ml-[50%] -translate-x-1/2' onClick={()=>nav('/contact-us')}>Book Meeting</button> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
