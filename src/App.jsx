import  { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie data from the API
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        setMovies(response.data);
        console.log(response.data);
        
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movies",err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <center><h1>Movie Database</h1></center>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
