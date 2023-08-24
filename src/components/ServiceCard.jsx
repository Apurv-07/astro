// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ heading, para, image }) => {
  return (
    <div>
      <div className="flex flex-col cursor-pointer bg-orange-300 w-[600px] rounded-t-lg h-[475px] mt-10 max-sm:w-[300px] hover:bg-orange-100">
        <div className="h-[20rem] object-fill">
          <img className="rounded-t-lg relative w-[100%] h-[100%] " src={image} alt="card-image" />
        </div>
        <div className="p-5">
          <h1 className="text-[20px] font-inter font-bold">{heading}</h1>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
