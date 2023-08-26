import Herosection from "../components/Herosection";

const Contact = () => {
  return (
    <div className="relative">
      <div
        className="absolute flex justify-center h-screen w-screen top-[-130px] z-[-10] bg-[rgba(0,0,0,0.9)] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(/assets/Hanuman_ji.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Your content goes here */}
        <div className="max-md:flex-col flex mt-[200px] p-10 items-center gap-5 bg-[rgba(0,0,0,0.6)]">
        <div className="">
          <img className="rounded-2xl" src="/assets/Pandit_jee.jpeg" />
        </div>
        <div className="md:w-[50%] overflow-auto">
          <h1 className="text-[52px] text-white font-bold">Pandit Ji</h1>
          <p className="text-white font-bold">Pandit Jagannath Guruji is a renowned and talented top Indian astrologer with extensive experience. He offers a genuine range of astrological counselling and fortune-telling with useful predictions in significant events of your life, such as career, employment, business, and finance, issues of health, wealth, and relationships across marriage and compatibility matters (kundali matching), and potent luck, fortune, face, and palm readings to help you successfully navigate life.</p>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
