import { useEffect } from "react"


const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList)
  })
  return (
    <>
      <div className="mt-10 hidden md:block">
        <h2 className="font-bold text-[30px] dark:text-white">Trending Game</h2>
        <div className=" md:grid md:grid-cols-3   lg:grid-cols-4 gap-4 mt-10">
          {gameList.map((item, index) => index < 4 && (
            <>
              <div className="bg-[#22a1ef] rounded-lg  group hover:scale-110 transition-all duration-300 ease cursor-pointer">
                <img src={item.background_image} className="h-[270px] rounded-lg object-cover rounded-t-lg" alt="" />
                <h2 className="dark:text-white text-[20px] font-bold text-white p-2">{item.name}</h2>
              </div>
            </>
          ))}
        </div>
      </div>

    </>
  )
}

export default TrendingGames