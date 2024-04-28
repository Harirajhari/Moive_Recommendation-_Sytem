import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div>
          <h1>Movie Detail</h1>
          <br />
          {movie && (
            <div>
              <h3>{movie.movieName}</h3>
              <img src={movie.movieImage} alt="Movie Poster" />
              <p>{movie.genre}</p>
              <p>{movie.rating}</p>
              <p>{movie.releaseDate}</p>
              {/* Display other movie details */}
            </div>
          )}
        </div>
      );
    }

export default Category