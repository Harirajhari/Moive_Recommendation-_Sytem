import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopRatingTamil = (props) => {
    const {data} = props;
    const[soted , setsorted] = useState('');

    useEffect(() => {
        if (data) {
            const sortedCategories = [...data];
            sortedCategories.sort((a, b) => {
                const ratingA = parseFloat(a.rating.split('/')[0]);
                const ratingB = parseFloat(b.rating.split('/')[0]);
                return ratingB - ratingA;
            });
            const top10Movies = sortedCategories.slice(0, 10);
            setsorted(top10Movies);
        }
    }, [data]);

    const TopTamilMovie = [];

    soted && soted.map((item, index) => {
        if (item.language === "Tamil") {
            TopTamilMovie.push({ _id: item._id, movieName: item.movieName,movieImage:item.movieImage})
        }
    });

    const TopEnglishMovie = [];

    soted && soted.map((item, index) => {
        if (item.language === "English") {
            TopEnglishMovie.push({ _id: item._id, movieName: item.movieName,movieImage:item.movieImage})
        }
    });
    


  return (
    <div>
       <div style={{ height: "60vh" }}>
            <div><h1 className='top-rating-heading'>Top Tamil Rating Movies</h1></div>
            <div className='parent'>
                <div className='card-container' >
                    {TopTamilMovie && TopTamilMovie.map((item, index) => (
                        <Link to={`/movie/${item._id}`} key={item._id} className='card'>
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



        <div style={{ height: "60vh" }}>
            <div><h1 className='top-rating-heading'>Top English Rating Movies</h1></div>
            <div className='parent'>
                <div className='card-container' >
                    {TopEnglishMovie && TopEnglishMovie.map((item, index) => (
                        <Link to={`/movie/${item._id}`} key={item._id} className='card'>
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
    </div>
  )
}

export default TopRatingTamil