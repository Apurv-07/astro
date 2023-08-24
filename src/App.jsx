// import React from 'react'
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const App = () => {
  const [moveToTopBtnVisible, setMoveToTopBtnVisibility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //handling move to top button visibility
  useEffect(() => {
    const handleMoveToTopBtnVisibility = () => {
      window.scrollY > 800
        ? setMoveToTopBtnVisibility(true)
        : setMoveToTopBtnVisibility(false);
    };

    window.addEventListener("scroll", handleMoveToTopBtnVisibility);

    return () =>
      window.removeEventListener("scroll", handleMoveToTopBtnVisibility);
  }, []);

  // handling click on move to top button
  const handleClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    setIsOpen(false)
  };

  return (
    <div>
      {/* navigation component */}
      <Navigation activeClass={location.pathname} />

      {/* move to top button */}
      {moveToTopBtnVisible && (
        <motion.div
          layout
          className="fixed right-10 bottom-10 flex justify-center items-center"
          onClick={handleClick}
          whileHover={{ cursor: "pointer", userSelect: "none" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <BiSolidUpArrowAlt className="w-10 h-10" />
          <motion.span className={isOpen ? "block" : "hidden"}>
            Move to top
          </motion.span>
        </motion.div>
      )}
    </div>
  );
};

export default App;
