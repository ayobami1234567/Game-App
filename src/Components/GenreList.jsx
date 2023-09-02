import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"

const GenreList = () => {

  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    getGenreList();
  }, [])
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.resuits);
      setGenreList(resp.data.resuits);
    })
  }
  return (
    <>
      <div>
        <h2 className="text-[30px] font-bold">Genre</h2>
      </div>
    </>
  )
}

export default GenreList