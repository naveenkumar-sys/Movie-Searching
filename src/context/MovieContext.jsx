import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext();
const MovieContext = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("s=Batman");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [movieDetails, setMovieDetails] = useState([]);

  const apiKey = "apikey=ca567694";
  const baseURL = "https://www.omdbapi.com/?";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `${baseURL}${query}${
          type ? `&type=${type}` : ""
        }&${apiKey}&page=${page}`;
        const res = await axios.get(url);

        if (res.data.Response === "True") {
          setMovie(res.data.Search);
          //   console.log(res.data.Search);
        } else {
          setMovie([]);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setMovie([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page, type, baseURL, apiKey]);

  //   console.log(movie);
  // console.log(movieDetails);

  return (
    <myContext.Provider
      value={{
        movie,
        setMovie,
        query,
        setQuery,
        loading,
        type,
        setType,
        page,
        setPage,
        movieDetails,
        setMovieDetails,
        apiKey,
        baseURL,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MovieContext;
