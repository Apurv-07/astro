/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
const Navigation = () => {
  let path = useLocation();
  let active = path.pathname;
  console.log("The current path", active);
  let [hide, setHide] = useState(false);
  let [contact, setContact] =useState(false);
  function handleClick() {
    setHide(!hide);
  }
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="sm:ml-5">
          <Logo />
        </div>
        <nav className="list-none flex gap-10 mr-10 font-inter text-[24px] font-semibold max-sm:hidden">
          <Link to="/">
            <li
              className={`hover:text-white cursor-pointer ${
                active == "/" ? "text-red-600" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/services">
            <li
              className={`hover:text-white cursor-pointer ${
                active == "/services" ? "text-red-600" : ""
              }`}
            >
              Our Services
            </li>
          </Link>
          <Link to="/contact-us">
            <li
              className={`hover:text-white cursor-pointer ${
                active == "/contact-us" ? "text-red-600" : ""
              }`}
            >
              Contact Us
            </li>
          </Link>
          <Link to="/about-us">
            <li
              className={`hover:text-white cursor-pointer ${
                active == "/about-us" ? "text-red-600" : ""
              }`}
            >
              About Us
            </li>
          </Link>
        </nav>
        <button className="mr-5 hidden max-sm:block" onClick={handleClick}>
          {!hide ? (
            <div>
              <div className="h-1 w-7 mt-2 bg-white" />
              <div className="h-1 w-7 mt-2 bg-white" />
              <div className="h-1 w-7 mt-2 bg-white" />
            </div>
          ) : (
            <div>
              <div className="h-1 w-7 mt-2 bg-white -rotate-45" />
              <div className="h-1 w-7 -mt-1 bg-white rotate-[45deg]" />
            </div>
          )}
        </button>
        {hide && (
          <nav className="list-none animate-[wave_0.6s_ease-in-out] bg-orange-500 top-[120px] z-10 w-full absolute text-center flex flex-col gap-10 mr-10 font-inter text-[14px] py-5 font-medium sm:hidden">
            <Link to="/" onClick={()=>setContact(false)}>
              <li
                className={`hover:text-red-600 cursor-pointer ${
                  active == "/" ? "text-red-600" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/services" onClick={()=>setContact(false)}>
              <li
                className={`hover:text-red-600 cursor-pointer ${
                  active == "/services" ? "text-red-600" : ""
                }`}
              >
                Our Services
              </li>
            </Link>
            <Link to="/contact-us">
              <li
                className={`hover:text-red-600 cursor-pointer ${
                  active == "/contact-us" ? "text-red-600" : ""
                }`}
                onClick={()=>setContact(true)}
              >
                Contact Us
              </li>
            </Link>
            <Link to="/about-us" onClick={()=>setContact(false)}>
              <li
                className={`hover:text-red-600 cursor-pointer ${
                  active == "/about-us" ? "text-red-600" : ""
                }`}
              >
                About Us
              </li>
            </Link>
          </nav>
        )}
      </div>
      <AnimatePresence mode="wait">
        <Routes location={path} key={path.key}>
          <Route path={"*"} element={<Home />} />
          <Route path={"/about-us"} element={<About />} />
          <Route path={"/contact-us"} element={<Contact />} />
          <Route path={"/services"} element={<Services />} />
        </Routes>
      </AnimatePresence>
      <Footer contact={contact} />
    </div>
  );
};

export default Navigation;
