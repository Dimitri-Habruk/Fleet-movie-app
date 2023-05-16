import { useContext } from "react";
import { MovieDetails } from "./components/MovieDetails";
import { MovieList } from "./components/MovieList";
import { SearchBar } from "./components/SearchBar";
import { MovieContext } from "../src/context/MovieContext";

function App() {
  const { bgImg } = useContext(MovieContext);

  return (
    <div>
      <SearchBar />
      <div
        style={{
          width: "95vw",
          display: "flex",
          backgroundImage:
            bgImg &&
            `url(https://thumb.tildacdn.com/tild3838-6635-4636-b230-636633613733/-/format/webp/qRfcndH1.png)`,
          position: "absolute",
          left: "2.5%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      >
        <MovieList style={{ width: "30vw" }} />
        <MovieDetails />
        {bgImg && (
          <h1
            style={{
              position: "absolute",
              top: "30%",
              left: "15%",
              right: "15%",
              textShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
            }}
          >
            In this application, you need to write the movie title in the search
            bar.
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
