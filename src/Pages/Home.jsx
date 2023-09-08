import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GameByGenresId from "../Components/GameByGenresId";

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setgameListByGenres] = useState([])

  useEffect(() => {
    getAllGameList();
    getGameListByGenreId();
  }, []);

  const getAllGameList = () => {
    GlobalApi.getAllGames.then((resp) => {
      // console.log(resp.data.results)
      setAllGameList(resp.data.results);
      setgameListByGenres(resp.data.results)
    });
  };
  const getGameListByGenreId = () => {
    GlobalApi.getGameListByGenreId(4).then((resp) => {
      // console.log(resp.data.results)
      console.log("Game List By GenresId:", resp.data.results);
    });
  };


  return (
    <>
      <div className="grid grid-cols-4 p-8">
        <div className="hidden md:block">
          <GenreList />
        </div>
        <div className="col-span-4 md:col-span-3 ">
          {/* For this banner it dones not have any data. so therefore we have to pass the data */}
          {/* 🚕🚕🚕🚕🚕🚕🚕🚕🚕 */}
          {/* tke noth of this we will bring error which is we can not Read this data. but the best solution is put one condition */}
          {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
            <>
              <Banner gameBanner={allGameList[0]} />
              <TrendingGames gameList={allGameList} />

              {/* For the Last sestion it will take sometime to load so you can find another opertion to hold it */}
              <GameByGenresId gameList={gameListByGenres} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
