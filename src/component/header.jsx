import React, { useState } from 'react'
import flimLogo from "../assets/flim-logo.svg"
import './Header.css'
import { Link , useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react'

const Header = (props) => {
    const { searchData } = props;
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const history = useNavigate();

    // Search the movie part
    const handleInputChange = (e) =>{
        const input = e.target.value;
        setSearchInput(input);

        if(input === '') {
            setSuggestions([]);
            return;
        }

        const filterSearch = searchData?.filter(item => item.movieName.toLowerCase().includes(input.toLowerCase()));
        setSuggestions(filterSearch);
    };

    // Clear search input and suggestions
    const clearSearchInput = () => {
        setSearchInput('');
        setSuggestions([]);
    };
    
    // Handle clicking on a movie
    const handleMovieClick = (movieId) => {
        history(`/movie/${movieId}`);
        clearSearchInput();
    };

    // Genre filtering.....................

    const filterMoviesByGenre = (genre) => {
        console.log(genre);
        setSelectedGenre(genre);
        clearSearchInput(); // Clear search input when selecting a genre
    };
    

    const movieGenres = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"];

    const filteredMovies = (searchData && selectedGenre !== 'All') ? searchData.filter(movie => movie.genre.includes(selectedGenre)) : searchData;


    //Language filtering......................

    const MovieLanguage = ["Tamil","English"];

    // const filterMovieByLanguage = (language) =>{
    //     history(`/${language}`);
    // };



    return (
        <div className='header-parent'>
            <div className='header-1'>
                <div className='header-logo'>
                    <img src={flimLogo} alt='Logo' width={55} height={55} />
                    <p>Movie Bluff</p>
                </div>
                <div className='header-routes'>
                    <Link to={'/'} className='link'>Home</Link>
                    <div className='dropdown'>
                        <button className='dropbtn'>Genres</button>
                        <div className='dropdown-content'>
                            {movieGenres.map((item,index)=>(
                                <Link key={index} to={`/movie/${item}`} className='dropdown-link' onClick={()=> filterMoviesByGenre(item)}>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='dropdown'>
                        <button className='dropbtn'>Languages</button>
                        <div className='dropdown-content'>
                            {MovieLanguage.map((item,index)=>(
                                <Link key={index} to={`/language/${item}`} className='dropdown-link' >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
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

export default Header;
