import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Movies() {

    const [movies, setMovies] = useState([
        "movie1", "movie2", "movie3", "movie4"
    ])
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';

    // useEffect
    //     < HTTP >

    const visibleMovies = movies.filter(movie => movie.includes(movieId))

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
            <button onClick={() => setSearchParams({ c: 'FUCK'})}>change sp</button>
            <ul>
                {visibleMovies.map(movie => {
                    return <li>
                        <Link key={movie} to={`${movie}`}>
                            {movie}
                        </Link>
                    </li>
                })}
            </ul>    
        </div>
    )
};

export default Movies;