import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./movieList.css"

const MovieList = (props) => {
    const { data, setData } = props;
    const [ratingcategory, setRatingCategory] = useState();
    

    useEffect(() => {
        if (data) {
            const sortedCategories = [...data];
            sortedCategories.sort((a, b) => {
                const ratingA = parseFloat(a.rating.split('/')[0]);
                const ratingB = parseFloat(b.rating.split('/')[0]);
                return ratingB - ratingA;
            });
            const top10Movies = sortedCategories.slice(0, 10);
            setRatingCategory(top10Movies);
        }
    }, [data]);

    return (
        <div style={{ height: "60vh" }}>
            <div><h1 className='top-rating-heading'>Top Rating Movie</h1></div>
            <div className='parent'>
                <div className='card-container' >
                    {ratingcategory && ratingcategory.map((item, index) => (
                        <Link to={`/movie/${item._id }`} key={item._id} className='card'>
                        <img src={`http://localhost:8000/images/${item.movieImage}`} alt='Movie poster' />
                        <div className='movieName-List'>
                            <h1>{item.movieName}</h1>
                            <p>{item.genre}</p>
                            <p>{item.rating}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default MovieList;

