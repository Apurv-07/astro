import React from "react";
const Footer = ({contact}) => {
    console.log(contact)
  return (
    <footer >
      <div className={` text-yellow-300 bg-red-600 mt-6 md:h-34  sm:h-76  gap-10 l:h-30 relative ${contact && "bottom-[1800px]"} `}  >
        <div className="">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-1 px-5 py-2 focus:outline-none text-center pt-2 pb-8 justify-between ">
            {/* {colum1} */}
            <div className=" font-bold text-xl">
              <h4>Acharya chandra Bhushan Mishra</h4>
              <ul>
                <li>Rd No-09,H.No-20,Shiv Nagar,<br />A.G Colony,Ashiyana,Patna-25</li>
                <li><a href="#"> M.No=+919234221212</a></li>
                <li>M.NO=+919430923012</li>
              </ul>
            </div>
              {/* colum2 */}
              <div className=" font-bold text-xl gap-6">
                <h4 className="font[3vh]">Office</h4>
                <ul>
                  <li>
                    Durga mandir Durgakund Varanasi
                  </li>
                  <li>Ashiana Diga Patna</li>
                </ul>
              </div>
              {/* colum3 */}
              <div className="text-xl font-bold">
                <h4>Services</h4>
                <ul className=" m-2 ">
                 <li>Kundli</li>
                 <li>Palmistry</li>
                 <li>All type of puja</li>
                  <li>Vastu Shastra</li>

                </ul>
              </div>
              
              <div className="  relative flex justify-between h-1 border-b-4  border-yellow-400  items-center lg:items-center " ></div>
              
              <div className=" font-bold">
                <span>@2023 Apply .All rights reserved</span><br />
                <span>Terms .Privacy policy</span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;