import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

export const MovieList = () => {
  const { movies, setMovies, setMovieId, setBgImg } = useContext(MovieContext);

  const setMovie = (movieId) => {
    setMovieId(movieId);
  };

  useEffect(() => {
    setMovies(movies);
    movies && movies.length > 0 && setBgImg(false);
  }, [movies]);

  return (
    <div
      style={{
        height: "80vh",
        margin: "auto",
        overflowY: movies && movies.length > 0 ? "auto" : "initial",
      }}
    >
      {movies && movies.length > 0 && (
        <table
          style={{ width: "90%", borderCollapse: "collapse", margin: "auto" }}
        >
          <tbody>
            {movies.map((e) => (
              <tr key={e.id}>
                <td style={{ borderBottom: "1px solid black" }}>{e.title}</td>
                <td style={{ borderBottom: "1px solid black" }}>
                  {e.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
                      alt=""
                      style={{
                        height: "70px",
                        borderRadius: "1px",
                        margin: "auto",
                      }}
                    />
                  )}
                </td>
                <td style={{ borderBottom: "1px solid black" }}>
                  {e.release_year}
                </td>
                <td style={{ borderBottom: "1px solid black" }}>
                  <button onClick={() => setMovie(e.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
