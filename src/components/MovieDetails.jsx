import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
export const MovieDetails = () => {
  const { movies, setMovies, setMovieId, movieId } = useContext(MovieContext);

  const [choosenMovie, setChoosenMovie] = useState();

  const fetchMovieById = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c597aa4b26bc3b666a5d6a88f1cf9d8`
      );
      setChoosenMovie(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieById();
  }, [movieId]);

  return (
    <div style={{ border: "1px solid red", width: "68vw", marginLeft: "auto" }}>
      MovieDetails
      {movieId ? (
        <>
          <h1>{choosenMovie.title}</h1>
          <img
                      src={`https://image.tmdb.org/t/p/original/${choosenMovie.poster_path}`}
                      alt=""
                      style={{
                        height: "290px",
                        borderRadius: "1px",
                        margin: "auto",
                      }}
                    />
          <h2>{choosenMovie.overview}</h2>
        </>
      ) : (
        <h2>Please search before a movie</h2>
      )}
    </div>
  );
};
