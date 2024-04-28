import React, { useEffect, useRef, useState } from 'react'
import "./movieList.css"

const MovieList = (props) => {
    const { data, setData } = props;
    const [ratingcategory, setRatingCategory] = useState();
    const cardContainerRef = useRef(null);

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



    const scrollRight = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft += 300;
        }
    };

    const scrollLeft = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft -= 300;
        }
    };


    return (
        <div style={{ height: "60vh" }}>
            <div><h1 className='top-rating-heading'>Top Rating Movie</h1></div>
            <div className='parent'>
                <div className='card-container' ref={cardContainerRef}>
                    {ratingcategory && ratingcategory.map((item, index) => (
                        <div className='card' key={item._id}>
                            <img src={item.movieImage} alt='Movie poster' />
                            <div>
                                <h1>{item.movieName}</h1>
                                <p>{item.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='scroll-btn left' onClick={scrollLeft}>{"<"}</button>
            <button className='scroll-btn right' onClick={scrollRight}>{">"}</button>
        </div>
    );

}

export default MovieList;
