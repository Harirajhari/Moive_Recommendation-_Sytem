import { Link, useParams } from 'react-router-dom';
import "./LanguageCAT.css"

const LanguageCAT = (props) => {

    const { language } = useParams();

    const { data } = props;
    const arr = [];

    data != null && data.map((item, index) => {
        if (item.language === language) {
            arr.push({ id: item._id, movieName: item.movieName, movieImage: item.movieImage })
        }
    });

    return (
        <div className='language-cat-container'>
            {arr && arr.map((item, index) => (
                <Link to={`/movie/${item.id}`} key={item.id} className='movie-card'>
                    <img src={`http://localhost:8000/images/${item.movieImage}`} alt='Movie poster' />
                    <div className='movie-details'>
                        <h1>{item.movieName}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default LanguageCAT;
