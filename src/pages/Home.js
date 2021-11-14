import React, { useEffect, useState, useContext } from "react";

// Carousel Import
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


// Component Import
import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";

// Layout Import
import HomeLayout from "../layouts/HomeLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

// Router Import
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [isAdded, setisAdded] = useState(false);

  let history = useNavigate();


  const {
    trendingMovies,
    trendingTVShows,
    fetchTrendingMovies,
    fetchTrendingTVShows,
    fetchTrendingPerson,
  } = useContext(GlobalContext);

 

  const handleItemClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchTrendingTVShows();
    fetchTrendingPerson();
  }, []);

  return (
    <HomeLayout>
      <Slider
        trendingMovies={trendingMovies}
        handleItemClick={handleItemClick}
      />
      <h4 className="text-white pl-2 pt-4">
     Trending Movies
      </h4>
      <Carousel slidesPerPage={9} keepDirectionWhenDragging>
        {trendingMovies &&
          trendingMovies.map((item) => (
            <Card
              id={item.id}
              type="movie"
              title={item.title}
              posterpath={item.poster_path}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>

      <h4 className="text-white pl-2 pt-4">
        Trending Tv Shows
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {trendingTVShows &&
          trendingTVShows.map((item) => (
            <Card
              id={item.id}
              type="tvshow"
              title={item.title}
              posterpath={item.poster_path}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </HomeLayout>
  );
}

export default Home;