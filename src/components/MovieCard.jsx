import React, { useContext } from "react";
import { myContext } from "../context/MovieContext";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";

const MovieCard = () => {
  const { movie, setMovieDetails, page, setPage, loading, setLoading } =
    useContext(myContext);

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const HandleMoreDetail = async (data) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${data.imdbID}&apikey=747591dd`
    );
    setMovieDetails(response.data || []);
    navigate("/movieDetails");
    // console.log(response.data);
  };

  // console.log(MovieDetails);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
        {movie.length > 0 ? (
          movie.map((movie, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 
                   transform transition-all duration-500 
                   hover:-translate-y-3 hover:rotate-x-6 "
            >
              {/* Poster */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.Title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-[140px]">
                <div>
                  <h3 className="font-bold text-lg line-clamp-1">
                    {movie.Title}
                  </h3>
                  <p className="text-sm text-gray-500">{movie.Year}</p>
                </div>

                <button
                  onClick={() => HandleMoreDetail(movie)}
                  className="mt-3 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 
                       text-black font-semibold tracking-wide
                       hover:scale-105 transition-all duration-300 shadow-md"
                >
                  More Details
                </button>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                        transition duration-500 blur-xl bg-purple-400/20 -z-10"
              ></div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center mt-24">
            <div
              className="px-10 py-8 rounded-3xl 
                  bg-white/70 backdrop-blur-xl
                  border border-white/30
                  shadow-2xl text-center"
            >
              <p className="text-2xl font-semibold text-gray-800">
                No results found
              </p>
            </div>
          </div>
        )}
      </div>

      {/* pagination part  */}
      {movie.length > 0 && (
        <div className="flex justify-center items-center mt-10 gap-3">
          <button
            onClick={() => setPage(1)}
            className="px-5 py-2 rounded-xl bg-black text-white 
                 hover:scale-105 transition-all duration-300"
          >
            Home
          </button>

          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
            className="px-5 py-2 rounded-xl bg-white/80 backdrop-blur-md 
                 border border-gray-300 text-black font-semibold
                 disabled:opacity-40 disabled:cursor-not-allowed
                 hover:scale-105 transition-all duration-300"
          >
            ← Back
          </button>

          <span
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 
                     text-black font-bold shadow-lg"
          >
            Page {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-5 py-2 rounded-xl bg-white/80 backdrop-blur-md 
                 border border-gray-300 text-black font-semibold
                 hover:scale-105 transition-all duration-300"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
