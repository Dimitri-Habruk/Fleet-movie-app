import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
export const MovieDetails = () => {
  const {movieId } = useContext(MovieContext);

  const [choosenMovie, setChoosenMovie] = useState();

  const fetchMovieById = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c597aa4b26bc3b666a5d6a88f1cf9d8&append_to_response=credits,videos`
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
    <div style={{ width: "68vw", marginLeft: "auto" }}>
      {movieId && choosenMovie && (
        <>
          <h1 style={{ textAlign: "center", marginTop: "2%" }}>
            {choosenMovie.title}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              margin: "auto",
            }}
          >
            <p>Year : {choosenMovie.release_date} </p>
            <p>Duration of the film : {choosenMovie.runtime} minutes</p>

            <p>
              {" "}
              Average rating:{" "}
              {choosenMovie.vote_count > 0
                ? `${choosenMovie.vote_average} out of ${choosenMovie.vote_count} votes`
                : "No votes yet"}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent:'space-between' }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${choosenMovie.poster_path}`}
              alt=""
              style={{
                height: "260px",
                borderRadius: "1px",
                marginLeft: "5%",
          
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "75%",
                height: "300px",
              }}
            >
              <h2
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden",
                  fontSize: "100%",
                }}
              >
                {choosenMovie.overview}
              </h2>

              {choosenMovie.videos && choosenMovie.videos.results && (
                <div>
                  {choosenMovie.videos.results.map((video, index) => {
                    if (index === 0) {
                      return (
                        <div key={video.id}>
                          <h2>Video:</h2>
                          <p>{video.name}</p>
                          <iframe
                            width="360"
                            height="auto"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </div>

          <div>
            <div>
              {choosenMovie && choosenMovie.credits && (
                <div>
                  <h2 style={{ marginLeft: "5%" }}>Actors:</h2>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {choosenMovie.credits.cast.slice(0, 10).map((actor) => (
                      <div
                        key={actor.id}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginRight: "10px",
                        }}
                      >
                        {actor.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                            alt={actor.name}
                            style={{ width: "70px" }}
                          />
                        ) : (
                          <img
                            src={`https://img-17.ccm2.net/D6U8BTHt725j955FrEJc2ELUq9o=/2048x/317e4774e98c48e8a7c26cbcd5651a26/ccm-faq/Incognito_Chrome_0.jpg`}
                            alt={actor.name}
                            style={{ width: "40px" }}
                          />
                        )}
                        <h4>{actor.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>



          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${choosenMovie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
              zIndex: -1,
            }}
          ></div>
        </>
      )}

      <div />
    </div>
  );
};
