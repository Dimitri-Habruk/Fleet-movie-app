import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
export const SearchBar = () => {
  const { setMovies } = useContext(MovieContext);
  
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
    <div style={{ display: "flex", backgroundColor: "#ff4352" }}>
      <h1 style={{ marginLeft: "auto" }}>Movie App</h1>
      <input
        style={{ width: "70%", padding: "7px", margin: "auto" }}
        placeholder="Search for a movie by title"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
};
