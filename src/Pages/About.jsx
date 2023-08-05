import ZodiacCard from "../components/ZodiacCard";
import { zodiacSigns } from "../data/data";

const About = () => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-orange-200 to-yellow-100">
      <div>
        <h2 className="text-[24px] text-center font-inter font-semibold border-orange-300 border-solid border-y-4">
          Types of Rashi (zodiac signs)
        </h2>
        <p className="mt-5 font-inter text-center p-12">
          In astrology, there are 12 types of Rashi (zodiac signs) based on the
          Vedic system. Each Rashi represents a specific energy and has unique
          characteristics. The 12 zodiac signs are:
        </p>
      </div>
      <div className="flex flex-col gap-12  items-center justify-center w-full ">
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
    </div>
  );
};

export default About;
