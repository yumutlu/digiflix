import React, { Suspense } from "react";

// NPM Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Router Import
import Movie from "./pages/Movie";
import TVShow from "./pages/TVShow";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import TVShowsList from "./pages/TVShowsList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Suspense fallback="loading">
      <GlobalProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
      <Route exact path="/movie/:id" element={<Movie />} />
      <Route exact path="/tvshow/:id" element={<TVShow />} />
      <Route exact path="/movies" element={<MovieList />} />
      <Route exact path="/tv-shows" element={<TVShowsList />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
