import { useEffect } from "react";

const GameByGenresId = ({ gameList }) => {
  useEffect(() => {
    console.log("GameList", gameList);
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-[30px] mt-5">Popular Game</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => ( // Use parentheses here
          <div key={item.id} className="pb-5 bg-slate-300 dark:bg-gray-700  p-4 rounded-lg h-full 
          hover:scale-110 transition-all duration-300 cursor-pointer bg-[#22a1ef] "> {/* Added a 'key' prop for each mapped item */}
            <img src={item.background_image} className="w-full h-[70%] rounded-xl object-cover" alt="" />
            <h2 className="text-[16px] pt-5 dark:text-white font-bold">
              {item.name} <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
            </h2>
            <h2>⭐{item.rating} 💬{item.reviews_count}🔥{item.suggestions_count}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameByGenresId;
