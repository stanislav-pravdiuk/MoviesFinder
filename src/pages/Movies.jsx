import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import queryMovies from 'services/queryAPI';

function Movies() {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();
    const movieId = searchParams.get('movieId') ?? '';


    const fetchParams = `search/movie?api_key=`;
    const query = `&query=${movieId}`;
    
    function searchMovie() {
        queryMovies(fetchParams, query)
            .then(response => setMovies(response.results))
            .catch(error => { console.log(error) })
    };

    function updateQueryString(e) {
        if (e.target.value === '') {
            return setSearchParams({})
        }
        setSearchParams({movieId: e.target.value})
    };

    return (
        <div>
            <input
                type="text"
                value={movieId}
                onChange={updateQueryString}
            />
            <button onClick={searchMovie}>Search</button>
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <Link state={{ from: location}} to={`${movie.id}`}>
                            {movie.original_title}
                        </Link>
                    </li>
                })
                }
            </ul>    
        </div>
    )
};

export default Movies;