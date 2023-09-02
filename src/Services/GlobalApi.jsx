import axios from "axios"

const key = "d90ccec0d517410ab0cba45aebe303a5"
const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api"
})

const getGenreList = axioCreate.get('/games?key=' + key);
export default {
  getGenreList
}