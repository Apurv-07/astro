function Card2({ item }) {
  return (
    <div className="flex justify-center items-center gap-8 border-b-2 border-b-orange-200 max-sm:flex-col max-sm:gap-4">
      <div className="w-96 h-60 max-sm:w-full max-sm:h-full object-cover">
        <img src={item.image} alt={item.title} className="w-full h-52" />
      </div>
      <div className="flex justify-evenly items-start flex-col w-[50rem] h-60 max-sm:w-full max-sm:h-full gap-4 max-sm:items-center">
        <h2 className="font-bold text-xl">{item.title}</h2>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default Card2;
