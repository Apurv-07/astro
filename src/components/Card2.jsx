function Card2({ item }) {
  return (
    <>
    <div className="group w-[300px] h-[400px] bg-orange-600 mt-5 flex flex-col rounded-lg hover:bg-blue-500 hover:shadow-xl hover:text-yellow-200 transform hover:scale-105 hover:translate-y-[-5px] transition duration-300 ease-in-out cursor-pointer">
      <div className="w-full h-[50%] rounded-lg">
        <img className="h-full rounded-t-lg" src={item.img} alt={item.title} />
      </div>
      <style>
        {`.no-scrollbar::-webkit-scrollbar {
            display: none;
        }`}
      </style>
      <div className="bg-orange-400 w-full h-[50%] overflow-auto no-scrollbar rounded-b-lg p-4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-700 group-hover:text-yellow-200">{item.content}</p>
      </div>
    </div>
    </>
  );
}

export default Card2;
