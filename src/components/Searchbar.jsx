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
    <div className="text-center mb-4 py-3">
      <div>
        <label className="font-extrabold">Search : </label>
        <input
          type="text"
          value={query ? query.replace("s=", "").replaceAll("+", " ") : ""}
          onChange={handleQuery}
          className="border-4 border-sky-500 p-2 rounded-lg w-1/2 mb-3 text-lg"
          placeholder="Search For A Movie..."
        />
      </div>

      <div className="w-full text-center mt-2">
        <label className="font-extrabold">Filter : </label>
        <select
          id="Select"
          value={type}
          onChange={handleTypeChange}
          className="py-2 px-3 mb-2 w-[50%] min-w-56 outline-none rounded-xl border-4 border-purple-600 text-lg font-extrabold hover:cursor-pointer"
        >
          <option value="">All</option>
          <option value="movie" className="text-lg text-cyan-500 font-bold">
            Movies
          </option>
          <option value="series" className="text-lg text-cyan-500 font-bold">
            Series
          </option>
          <option value="episode" className="text-lg text-cyan-500 font-bold">
            Episode
          </option>
        </select>
      </div>
    </div>
  );
};

export default Searchbar;
