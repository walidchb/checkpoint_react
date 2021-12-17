import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./style.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [Filter, setFilter] = useState(0);

  function TitleChange(event) {
    setTitle(event.target.value);
  }

  function DescriptionChange(event) {
    setDescription(event.target.value);
  }

  function PosterURLChange(event) {
    setPoster(event.target.value);
  }

  function RatingChange(event) {
    setRating(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMovies([
      ...movies,
      {
        title,
        description,
        rating,
        poster,
      },
    ]);
  }

  function FilterChange(event) {
    setFilter(event.target.value);
  }

  function FilterSubmit(event) {
    event.preventDefault();
  }

  var MoviesFilter = [];
  movies.forEach((element) => {
    if (element.rating > Filter) {
      MoviesFilter.push(element);
    }
  });

  return (
    <div>
      <div className="MovieList">
        {MoviesFilter.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              desc={movie.description}
              rating={movie.rating}
              poster={movie.poster}
            />
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Title :
          <input type="text" value={title} onChange={TitleChange} />
        </label>

        <label>
          Description :
          <input type="text" value={description} onChange={DescriptionChange} />
        </label>

        <label>
          PosterURL :
          <input type="text" value={poster} onChange={PosterURLChange} />
        </label>

        <label>
          Rating :
          <input type="number" value={rating} onChange={RatingChange} />
        </label>

        <input type="submit" value="Envoyer" />
      </form>

      <br />
      <br />
      <br />
      <form onSubmit={FilterSubmit}>
        <label>
          Minimum Rate :
          <input type="number" value={Filter} onChange={FilterChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default MovieList;
