import React, { useState } from 'react'
import flimLogo from "../assets/flim-logo.svg"
import './Header.css'
import { Link , useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react'

const Header = (props) => {
    const { searchData } = props;
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useNavigate();

//serach the movie part
    const handleInputChange = (e) =>{
        const input = e.target.value;
        console.log(input);
        setSearchInput(input);

        if(input == 0)
        {
            setSuggestions([]);
            return;
        }

        const filtersearch = searchData.filter(item => item.movieName.toLowerCase().includes(input.toLowerCase()));
        console.log(filtersearch);
        setSuggestions(filtersearch);
    };

    const clearSearchInput = () => {
            setSearchInput('');
            setSuggestions([]);
    };

    const handleMovieClick = (movieId) => {
        history(`/movie/${movieId}`);
        clearSearchInput();
    };

    return (
        <div className='header-parent'>
            <div className='header-1'>
                <div className='header-logo'>
                    <img src={flimLogo} alt='Logo' width={55} height={55} />
                    <p>Movie Bluff</p>
                </div>
                <div className='header-routes'>
                    <Link to={'/'} className='link'>Home</Link>
                    <Link href='#genres' className='link'>Genres</Link>
                    <Link to={'/Lanugages'} className='link'>Languages</Link>
                </div>
            </div>


            <div className='header-2'> 
                <div className='header-search'>
                    <input type='name' placeholder='Search..' value={searchInput} onChange={handleInputChange} />
                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((movie, index) => (
                                <li key={index} onClick={() => handleMovieClick(movie._id)}>
                                {movie.movieName}
                            </li>
                            ))}
                        </ul>
                    )}
                    <Search size={24} color="#5f5e5e" className='header-icon' />
                </div>

                <div className='header-button'>
                    <Link to={'/signup'} className='link'>Get Started</Link>
                    <Link to={'/login'} className='link'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header