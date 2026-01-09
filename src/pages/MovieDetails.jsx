import React, { useContext } from "react";
import { myContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { loading, movieDetails } = useContext(myContext);
  // console.log(MovieDetails);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 p-6 flex flex-col md:flex-row justify-center gap-6">
      {/* Soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-sky-500/30 rounded-full blur-[150px]" />
      </div>

      {/* Poster */}
      <img
        src={
          movieDetails.Poster !== "N/A"
            ? movieDetails.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movieDetails.Title}
        className="relative z-10 h-[80vh] w-full md:w-1/3 rounded-2xl shadow-2xl"
      />

      {/* Details Card */}
      <div className="relative z-10 md:w-2/3 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">
        <h1 className="text-4xl font-extrabold mb-4">{movieDetails.Title}</h1>

        <div className="space-y-1 text-gray-700">
          <p>
            <span className="font-semibold">Year:</span> {movieDetails.Year}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {movieDetails.Genre}
          </p>
          <p>
            <span className="font-semibold">Director:</span>{" "}
            {movieDetails.Director}
          </p>
          <p>
            <span className="font-semibold">Actors:</span> {movieDetails.Actors}
          </p>
          <p>
            <span className="font-semibold">Language:</span>{" "}
            {movieDetails.Language}
          </p>
          <p>
            <span className="font-semibold">IMDb Rating:</span> ⭐{" "}
            {movieDetails.imdbRating}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Plot</h2>
        <p className="text-gray-800 leading-relaxed">{movieDetails.Plot}</p>

        {/* Modern Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl
                 bg-gradient-to-r from-sky-500 to-purple-600
                 text-black font-bold tracking-wide
                 shadow-lg hover:shadow-xl
                 hover:scale-105 transition-all duration-300"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
