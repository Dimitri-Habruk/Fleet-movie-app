import "./App.css";
import { MovieDetails } from "./components/MovieDetails";
import { MovieList } from "./components/MovieList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30vw" }}>
        <SearchBar />
        <MovieList />
      </div>

      <MovieDetails />
    </div>
  );
}

export default App;
