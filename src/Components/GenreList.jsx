import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"

const GenreList = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [genreList, setGenreList] = useState([]); // Initialize as an empty array
  useEffect(() => {
    getGenreList();
  }, []); // Add an empty dependency array to run this effect only once

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      // console.log(resp.data.results); // Use 'results' instead of 'resuits'
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white p-8">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          key={index} className={`flex gap-2 items-center cursor-pointer mr-10
          group  transition-all duration-300 rounded-lg p-3 
          ${activeIndex == index ? "bg-slate-300 dark:bg-gray-700 " : null}`} > {/* Add a unique 'key' prop for each mapped item */}
          <img src={item.background_image} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ${activeIndex == index ? "scale-105" : null} `} alt="" />
          <h3 className=" text-[16px] group-hover:font-bold transition-all ease-out duration-300">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;


// w-[40px] h-[40px] object-cover rounded-lg

// w-   [40px] h-[40px] object-cover rounded-lg group-hover:scale-150   transition-all duration-300 ${activeIndex == index ? "scale-150" : null} 