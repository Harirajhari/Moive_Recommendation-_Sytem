import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopRatingTamil = (props) => {
    const {data , setdata} = props;
    const [ratingcategory, setRatingCategory] = useState();

    useEffect(() => {
        if (data) {
            const sortedCategories = [...data];
            sortedCategories.sort((a, b) => {
                const ratingA = parseFloat(a.rating.split('/')[0]);
                const ratingB = parseFloat(b.rating.split('/')[0]);
                return ratingB - ratingA;
            });
            setRatingCategory(sortedCategories);
        }
    }, [data]);


    const arr = [];

    ratingcategory != null && ratingcategory.map((item, index) => {
        if (item.language === "Tamil") {
            arr.push({ _id: item._id, movieName: item.movieName,movieImage:item.movieImage})
        }
    });

    console.log(arr);
    


  return (
    <div>
       <div style={{ height: "60vh" }}>
            <div><h1 className='top-rating-heading'>Top Tamil Rating Movie</h1></div>
            <div className='parent'>
                <div className='card-container' >
                    {arr && arr.map((item, index) => (
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