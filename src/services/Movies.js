import axios from "./CustomizeAxios";

const getListMovies = () => {
  return axios.get("movies/viewAllMovie");
};

const getSearch = (message) => {
  const api = "movies/searchMovie/" + message;
  return axios.get(api);
};

const getFilterMovies = (message) => {
  const api = "movies/filterMovie/" + message;
  return axios.get(api);
};

export { getListMovies, getSearch, getFilterMovies };
