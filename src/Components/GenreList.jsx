import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"

const GenreList = () => {

  const [genreList, setGenreList] = useState([]); // Initialize as an empty array
  useEffect(() => {
    getGenreList();
  }, []); // Add an empty dependency array to run this effect only once

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.results); // Use 'results' instead of 'resuits'
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white p-8">Genre</h2>
      {genreList.map((item, index) => (
        <div key={index} className="flex  gap-2 items-center cursor-pointer hover:bg-gray-300 group  p-2 rounded-lg hover:dark:bg-gray-600 transition-all duration-300"> {/* Add a unique 'key' prop for each mapped item */}
          <img src={item.background_image} className="w-[40px] h-[40px] object-cover rounded-lg" alt="" />
          <h3 className=" text-[18px] group-hover:scale-105">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
