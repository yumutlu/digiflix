import React, { useEffect, useContext } from "react";
import { useParams} from "react-router-dom";
// React Icon Import
import { AiOutlineStar } from "react-icons/ai";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// Router Import
import { useNavigate } from "react-router-dom";
// Component Import
import Card from "../components/Card/Card";
import InfoSlider from "../components/InfoSlider/InfoSlider";
// Layout Import
import DetailLayout from "../layouts/DetailLayout";
// Context
import { GlobalContext } from "../context/GlobalState";
function TVShow({ match, location }) {
  let history = useNavigate();
const params = useParams()

  const {
    getCurrentTVShow,
    currentTVShow,
    getCurrentGenres,
    currentGenres,
    getSimilarTVShows,
    similarTVShows,
  } = useContext(GlobalContext);



  const handleItemClick = (path) => {
    history(path);
  };

  useEffect(() => {
    getCurrentTVShow(params.id);
    getCurrentGenres(params.id);
    getSimilarTVShows(params.id);
  }, [params.id]);
  return (
    <DetailLayout>
      <InfoSlider>
        {currentTVShow && (
          <div key={currentTVShow.id}>
            <div className="text-white" style={{ width: "80vw" }}>
              <img
                style={{
                  float: "left",
                  maxWidth: "20vw",
                  marginRight: 40,
                  borderRadius: 15,
                }}
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${currentTVShow.poster_path}`}
              />
              <h3
                style={{
                  fontSize: "3em",
                  fontWeight: "bold",
                }}
              >
                {currentTVShow.original_name}
              </h3>
              <button
                type="button"
                className="btn btn-outline-warning btn-lg my-3"
              >

                <AiOutlineStar /> IMDB {currentTVShow.vote_average}
              </button>
              {currentGenres &&
                currentGenres.map((genre) => (
                  <button
                    key={genre.id}
                    type="button"
                    className="btn btn-outline-secondary btn-lg ml-3 my-3"
                  >
                    {genre.name}
                  </button>
                ))}
              <h3>{currentTVShow.overview}</h3>

            </div>
          </div>
        )}
        
      </InfoSlider>
      <h4 className="text-white pl-2 pt-4">
       Similar Tv Show
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {similarTVShows &&
          similarTVShows.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              type="tvshow"
              posterpath={item.poster_path}
              popularity={item.popularity}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </DetailLayout>
  );
}

export default TVShow;