import axios from "axios"

const key = "d90ccec0d517410ab0cba45aebe303a5"
const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api"
})

const getGenreList = axioCreate.get('/genres?key=' + key);
const getAllGames = axioCreate.get('/games?key=' + key);
const getGameListByGenreId = (id) => axioCreate.get('/game?key=' + key + '&genres=' + id)
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId
}