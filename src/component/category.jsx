import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './category.css';

const Category = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="container">
      <h1>Movie Detail</h1>
      <br />
      {movie && (
        <div className="movie-card">
          <h3>{movie.movieName}</h3>
          <img className='catImage' src={`http://localhost:8000/images/${movie.movieImage}`} alt={movie.movieName} />
          <div className="movie-details">
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Description: {movie.movieDescription}</p>
            <p>Language: {movie.language}</p>
            <p>Director: {movie.cast.director}</p>
            <p>Writer: {movie.cast.writer}</p>
            <p>Actor: {movie.cast.actor}</p>
            <p>Actress: {movie.cast.actress}</p>
            <p>Duration: {movie.duration}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
