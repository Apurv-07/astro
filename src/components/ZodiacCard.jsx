const ZodiacCard = (props) => {
  const { img, name, description, date,title } = props;
  const path = "assets/";

  return (
    <>
      <div className="flex gap-x-6 bg-orange-300  w-[800px]  bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-xl overflow-hidden  max-sm:w-full rounded-xl">
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
          <p >{date}</p>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="w-[60%] max-sm:w-[200px] max-sm:h-[200px] p-4 pl-0 ">
            <h1 className="text-2xl font-bold text-center ">{title}</h1>
          <p className="text-ellipsis">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ZodiacCard;
