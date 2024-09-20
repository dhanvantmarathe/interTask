/* eslint-disable react/prop-types */


const MovieCard = ({ movie }) => {
  
  
  return (
    <div className="movie-card" >
      <img src={movie.image} alt={movie.movie} style={{ width: "200px", height: "300px" }} /><br/>
      <a href={movie.imdb_url}>Watch movie</a>
      <p>movie name : {movie.movie}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
