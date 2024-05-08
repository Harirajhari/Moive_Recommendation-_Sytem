import React, { useState, useEffect } from 'react';
import "./Dashboard.css";

function Dashboard(props) {
    const { data } = props;
    const [currentSlide, setCurrentSlide] = useState(0);


    const latestItems = data ? data.slice(0, 4) : [];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % latestItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + latestItems.length) % latestItems.length);
    };

    return (
        <div className='dashboard'>
            <h2 className="carousel-heading">Latest Movies</h2>
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {latestItems.map((item, index) => (
                        <div className="slide" key={index}>
                            <img src={`http://localhost:8000/images/${item.movieImage}`} alt={item.movieName} />
                            {/* <img src={`http://localhost:8000/images/Jailer.jpeg`} alt={item.movieName} /> */}
                            {/* <h1>{item.movieImage}</h1> */}

                            <h1>{item.movieName}</h1>
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
}

export default Dashboard;
