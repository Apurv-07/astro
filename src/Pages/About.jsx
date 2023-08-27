import ZodiacCard from "../components/ZodiacCard";
import { zodiacSigns } from "../data/data";
import { motion } from "framer-motion";
import Herosection from "../components/Herosection";
import moonAstro from "../assets/moon_astrology.jpg";

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
      <Herosection
        pic={moonAstro}
        h1={"My services"}
        p={
          "Meet with Pandit Jagannath Guruji, in person or online for a holistic consultation. Let Panditji help you amplify the happiness and prosperity in your life through his deep knowledge of Vedic astrology, palmistry, body vibrations and face reading for an enhanced life."
        }
      />
      <div className="px-10 -mt-[400px]">
        <h2 className="text-[24px] text-center font-inter font-semibold border-orange-300 border-solid border-y-4">
          Types of Rashi (zodiac signs)
        </h2>
        <p className="mt-5 font-inter text-center p-12 max-sm:p-0">
          In astrology, there are 12 types of Rashi (zodiac signs) based on the
          Vedic system. Each Rashi represents a specific energy and has unique
          characteristics. The 12 zodiac signs are:
        </p>
      </div>
      <div className="flex gap-12 items-center justify-center flex-wrap max-sm:mt-8">
        {zodiacSigns.map((zodiacSign) => {
          return (
            <ZodiacCard
              key={zodiacSign.id}
              img={zodiacSign.image}
              name={zodiacSign.name}
              title={zodiacSign.title}
              description={zodiacSign.description}
              date={zodiacSign.date}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default About;
