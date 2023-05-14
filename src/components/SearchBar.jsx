import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
export const SearchBar = () => {
  const { movies, setMovies } = useContext(MovieContext);
  // const [movies, setMovies] = useState(value);
  // const [emptyList, setEmptyList] = useState(false)
  // const { emptyList, setEmptyList } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2c597aa4b26bc3b666a5d6a88f1cf9d8&query=${searchTerm}`
      );
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div style={{ height: "12vh", backgroundColor: "lightblue" }}>
      <h1 style={{ fontSize: "1em" }}>Search for a movie by title.</h1>
      <div className="inputAndButton" style={{ display: "flex" }}>
        <input
          style={{ width: "80%", margin: "auto" }}
          placeholder="Search by name"
          type="text"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
