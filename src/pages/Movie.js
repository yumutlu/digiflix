import React, { useEffect, useContext } from "react";
import { useParams} from "react-router-dom";
// React Icon Import

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { useNavigate } from 'react-router-dom';

// Component Import
import Card from "../components/Card/Card";
import InfoSlider from "../components/InfoSlider/InfoSlider";

// Layout Import
import DetailLayout from "../layouts/DetailLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

function Movie({ match, location }) {

  let history = useNavigate();
  const params = useParams();  
  const {
    getCurrentMovie,
    currentMovie,
    getCurrentGenres,
    currentGenres,
    getSimilarMovies,
    similarMovies,
  } = useContext(GlobalContext);

  const handleItemClick = (path) => {
    history(path);
  };

  useEffect(() => {
    getCurrentMovie(params.id);
    getCurrentGenres(params.id);
    getSimilarMovies(params.id);
  }, [params.id]);

  return (
    <DetailLayout>
      <InfoSlider>
        {currentMovie && (
          <div key={currentMovie.id}>
            <div className="text-white" style={{ width: "80vw" }}>
              <img
                style={{
                  float: "left",
                  maxWidth: "20vw",
                  marginRight: 40,
                  borderRadius: 15,
                }}

                alt={currentMovie.title}
                src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`}
              />
              <h3
                style={{
                  fontSize: "3em",
                  fontWeight: "bold",
                }}
              >
                {currentMovie.title}
              </h3>
              <button
                type="button"
                className="btn btn-outline-info btn-sm mr-3"
              >
                 {currentMovie.release_date}
              </button>
              <button
                type="button"
                className="btn btn-outline-warning btn-sm my-3"
              >
                IMDB {currentMovie.vote_average}
              </button>
              {currentGenres &&
                currentGenres.map((genre) => (
                  <button
                    id={genre.id}
                    key={genre.id}
                    type="button"
                    className="btn btn-outline-primary btn-sm ml-3 my-3"
                  >
                    {genre.name}
                  </button>
                ))}
              <h3>{currentMovie.overview}</h3>
             
            </div>
          </div>
        )}
      </InfoSlider>
      <h4 className="text-white pl-2 pt-4">
    Smilar Movies
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {similarMovies &&
          similarMovies.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              type="movie"
              posterpath={item.poster_path}
              popularity={item.popularity}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </DetailLayout>
  );
}

export default Movie;