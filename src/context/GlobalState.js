import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import ApiUrl from "../helpers/Constants";
import ApiKey from "../helpers/ApiKey";


const initialState = {
  trendingMovies: [{}],
  trendingTVShows: [{}],
  similarMovies: [{}],
  similarTVShows: [{}],
  currentGenres: [{}],
  currentMovie: {},
  currentTVShow: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);



  const fetchTrendingMovies = async () => {
    const res = await axios
      .get(
        `${ApiUrl.BASE + ApiUrl.TRENDING}/movie/week?api_key=${ApiKey.API_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "FETCH_TRENDING_MOVIES",
          payload: res.data.results,
        });
      });
  };

  const fetchTrendingTVShows = async () => {
    const res = await axios
      .get(`${ApiUrl.BASE + ApiUrl.TRENDING}/tv/week?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "FETCH_TRENDING_TVSHOWS",
          payload: res.data.results,
        });
      });
  };

  const getSimilarMovies = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}/similar?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_SIMILAR_MOVIES",
          payload: res.data.results,
        });
      });
  };

  const getSimilarTVShows = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/tv/${id}/similar?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_SIMILAR_TVSHOWS",
          payload: res.data.results,
        });
      });
  };

  const getCurrentMovie = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_MOVIE",
          payload: res.data,
        });
      });
  };

  const getCurrentTVShow = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/tv/${id}?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_TVSHOW",
          payload: res.data,
        });
      });
  };

  const getCurrentGenres = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}?api_key=${ApiKey.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_GENRES",
          payload: res.data.genres,
        });
      });
  };








  return (
    <GlobalContext.Provider
      value={{
        movieCart: state.movieCart,
        tvshowCart: state.tvshowCart,
        trendingMovies: state.trendingMovies,
        trendingTVShows: state.trendingTVShows,
        similarMovies: state.similarMovies,
        similarTVShows: state.similarTVShows,
        currentMovie: state.currentMovie,
        currentTVShow: state.currentTVShow,
        currentGenres: state.currentGenres,
        getCurrentMovie,
        getCurrentTVShow,
        getCurrentGenres,
        getSimilarMovies,
        getSimilarTVShows,
        fetchTrendingMovies,
        fetchTrendingTVShows,
     
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};