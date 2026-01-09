import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
