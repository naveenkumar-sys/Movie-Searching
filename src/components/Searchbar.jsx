import React, { useContext } from "react";
import { myContext } from "../context/MovieContext";

const Searchbar = () => {
  const { query, setQuery, type, setType } = useContext(myContext);

  const handleQuery = (e) => {
    const value = e.target.value.trim();

    if (value) {
      setQuery(`s=${encodeURIComponent(value)}`);
    } else {
      setQuery("s=");
    }
  };

  const handleTypeChange = (e) => {
    const typeOf = e.target.value;
    setType(typeOf);
  };

  return (
    <div className="relative z-10 flex justify-center mb-14 pt-14  ">
      <div
        className="w-[95%] md:w-[70%] lg:w-[55%]
               bg-white/70 backdrop-blur-2xl
               border border-white/30
               rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
               px-6 py-6 flex flex-col md:flex-row gap-4"
      >
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            value={query ? query.replace("s=", "").replaceAll("+", " ") : ""}
            onChange={handleQuery}
            placeholder="Search movies, series..."
            className="w-full px-6 py-4 rounded-2xl
                   bg-black/90 text-white placeholder-gray-400
                   outline-none border border-white/10
                   focus:border-purple-500
                   focus:ring-2 focus:ring-purple-500/30
                   transition-all duration-300"
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            🔍
          </span>
        </div>

        {/* Filter */}
        <div className="relative w-full md:w-56">
          <select
            value={type}
            onChange={handleTypeChange}
            className="w-full px-6 py-4 rounded-2xl
                   bg-black/90 text-white
                   outline-none border border-white/10
                   focus:border-sky-500
                   focus:ring-2 focus:ring-sky-500/30
                   transition-all duration-300 cursor-pointer"
          >
            <option value="">All</option>
            <option value="movie">🎬 Movies</option>
            <option value="series">📺 Series</option>
            <option value="episode">🎞 Episodes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
