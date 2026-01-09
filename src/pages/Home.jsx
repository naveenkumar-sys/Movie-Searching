import React from "react";
import Searchbar from "../components/Searchbar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Searchbar />
      <MovieCard />
    </div>
  );
};

export default Home;
