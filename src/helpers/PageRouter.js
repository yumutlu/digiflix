import React from "react";

// NPM Packages
import { Route } from "react-router-dom";


// Private Pages
import Movie from "../pages/Movie";
import TVShow from "../pages/TVShow";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import TVShowsList from "../pages/TVShowsList";

const PagesRouter = () => {
  return (
    <>
      <Route exact path="/home" component={Home} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/tvshow/:id" component={TVShow} />
      <Route exact path="/movies" component={MovieList} />
      <Route exact path="/tv-shows" component={TVShowsList} />
    </>
  );
};

export default PagesRouter;