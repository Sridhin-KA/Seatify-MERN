import React from "react";

const movies = [
  {
    _id: "1",
    title: "Inception",
    description: "A thief enters dreams to steal secrets.",
    duration: 148,
    genre: "Sci-Fi",
    language: "English",
    poster: "https://via.placeholder.com/300x450",
    releasedate: "2010-07-16",
  },
  {
    _id: "2",
    title: "Avengers: Endgame",
    description: "Superheroes unite to defeat Thanos.",
    duration: 181,
    genre: "Action",
    language: "English",
    poster: "https://via.placeholder.com/300x450",
    releasedate: "2019-04-26",
  },
  {
    _id: "3",
    title: "Joker",
    description: "A mentally troubled comedian descends into madness.",
    duration: 122,
    genre: "Drama",
    language: "English",
    poster: "https://via.placeholder.com/300x450",
    releasedate: "2019-10-04",
  },
  {
    _id: "4",
    title: "Interstellar",
    description: "A team travels through a wormhole in space.",
    duration: 169,
    genre: "Sci-Fi",
    language: "English",
    poster: "https://via.placeholder.com/300x450",
    releasedate: "2014-11-07",
  },
];

const Movies = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">🎬 Movie App</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>

              <p className="text-sm text-gray-400 mt-1">
                {movie.genre} • {movie.duration} mins
              </p>

              <p className="text-sm mt-2 line-clamp-2">
                {movie.description}
              </p>

              <button className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Movies;