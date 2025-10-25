import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import MoviesListPage from "./components/MoviesListPage";
import MovieDetails from "./components/MovieDetails";
import SearchedMovieContext from "./context/SearchedMovieContext";

import "./App.css";

const App = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const updateSearchedMovie = (name) => setSearchedMovie(name);

  const changePage = (num) => setCurrentPage(num);

  const updateTotalPages = (pages) => setTotalPages(pages);

  return (
    <div className="app-container">
      <SearchedMovieContext.Provider
        value={{
          searchedMovie,
          updateSearchedMovie,
          currentPage,
          changePage,
          totalPages,
          updateTotalPages,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<MoviesListPage />} />
          <Route path="/top-rated" element={<MoviesListPage />} />
          <Route path="/upcoming" element={<MoviesListPage />} />
          <Route path="/searched-movies" element={<MoviesListPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SearchedMovieContext.Provider>
    </div>
  );
};

export default App;
