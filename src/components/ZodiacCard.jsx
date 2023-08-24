import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
const ZodiacCard = (props) => {
  const { img, name, description, date, title } = props;
  const path = "assets/";

  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ type: "just", duration:0.1 }}
        className={`flex gap-x-6 bg-orange-300 w-[800px]  bg-gradient-to-r from-yellow-300 to-orange-300 drop-shadow-xl max-sm:w-full rounded-xl relative ${
          isCardExpanded ? "h-auto" : "h-[25rem]"
        }`}
      >
        {/* IMAGE */}
        <div className="flex flex-col items-center">
          <div className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px]">
            <img
              className="w-full h-full object-cover "
              src={path + img}
              alt={name + " zodiac sign"}
            />
          </div>
          {/* NAME */}
          <div className="mt-4 text-center font-bold">
            <h1 className="text-2xl  ">{name}</h1>
            <p>{date}</p>
          </div>
        </div>
        {/* DESCRIPTION */}
        <motion.div className="w-[60%] max-sm:w-[200px] max-sm:h-[200px] p-4 pl-0 ">
          <h1 className="text-2xl font-bold text-center ">{title}</h1>
          <p className={`${!isCardExpanded && "line-clamp-[13]"}`}>
            {description}
          </p>
        </motion.div>
        <div
          className={`absolute ${
            isCardExpanded ? "-bottom-5" : "bottom-2"
          } right-3 hover:cursor-pointer hover:text-black text-blue-700 flex justify-between items-center`}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          {isCardExpanded ? (
            <>
              read less
              <IoIosArrowUp />
            </>
          ) : (
            <>
              read more
              <IoIosArrowDown />
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ZodiacCard;
