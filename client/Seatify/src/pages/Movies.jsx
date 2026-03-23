import { useEffect, useState } from "react";
import API from "../api/axios";

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    API.get("/movies/getmovies")
      .then((res) => {
        setMovies(res.data);
      });

  }, []);

  return (
    <div>

      <h2>Movies</h2>

      {movies.map((movie) => (

        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>

      ))}

    </div>
  );
}

export default Movies;