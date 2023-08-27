import { useState } from "react";
import { motion } from "framer-motion";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ZodiacCard = (props) => {
  const { img, name, description, date, title } = props;
  const path = "assets/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MODAL */}
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={
            "flex gap-x-6 max-sm:gap-0 max-sm:flex-col bg-orange-300 w-[900px] bg-gradient-to-r from-yellow-300 to-orange-300 drop-shadow-xl max-sm:w-full rounded-xl max-sm:p-1 absolute top-1/2 left-1/2 max-sm:overflow-auto max-sm:h-[35rem]"
          }
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* IMAGE */}
          <div className="flex flex-col items-center">
            <div className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[150px] object-cover">
              <img
                className="w-full h-full rounded-xl"
                src={path + img}
                alt={name + " zodiac sign"}
              />
            </div>
            {/* NAME */}
            <div className="mt-4 text-center font-bold">
              <h1 className="text-2xl max-sm:text-sm">{name}</h1>
              <p className="max-sm:text-sm">{date}</p>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-[60%] max-sm:w-full max-sm:h-[200px] p-4 ">
            <h1 className="text-2xl font-bold text-center max-sm:text-xl">{title}</h1>
            <p className="max-sm:text-sm">{description}</p>
          </div>
          <CloseIcon
            onClick={() => setIsOpen(false)}
            className="hover:cursor-pointer hover:scale-110 text-2xl absolute right-4 top-4 text-white"
          />
        </motion.div>
      </Modal>

      {/* INITIAL ZODIAC CARD */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        className={
          "flex max-sm:gap-2 max-sm:flex-col bg-orange-300 w-[650px] bg-gradient-to-r from-yellow-300 to-orange-300 drop-shadow-xl max-sm:w-full rounded-xl h-[26rem] hover:cursor-pointer max-sm:mx-2 max-sm:justify-evenly"
        }
        onClick={() => setIsOpen(true)}
      >
        {/* IMAGE */}
        <div className="flex flex-col items-center max-sm:justify-center">
          <div className="w-[300px] h-[300px] max-sm:w-[150px] max-sm:h-[150px]">
            <img
              className="w-full h-full object-cover max-sm:rounded-lg"
              src={path + img}
              alt={name + " zodiac sign"}
            />
          </div>
          {/* NAME */}
          <div className="mt-4 max-sm:mt-2 text-center font-bold">
            <h1 className="text-2xl max-sm:text-sm">{name}</h1>
            <p className="max-sm:text-sm">{date}</p>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="w-[60%] max-sm:w-full p-4">
          <h1 className="text-2xl font-bold text-center ">{title}</h1>
          <p className={"line-clamp-[12] max-sm:line-clamp-5"}>{description}</p>
          <div
            className={`absolute bottom-2 right-3 hover:text-black text-blue-700`}
          >
            read more
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ZodiacCard;
