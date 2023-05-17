import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMovies from 'services/fetchAPI';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const fetchParams = `trending/all/day?api_key=`;

    useEffect(() => {
            getMovies(fetchParams)
                .then(response => setPopularMovies(response.results))
                .catch(error => { console.log(error) });
    }, [fetchParams]);

    return (
        <div>
            <ul>
                {popularMovies.map(movie => {
                    return <li key={movie.id}>
                        <Link to={`${movie.id}`}>
                            {movie.id}
                        </Link>
                    </li>
                })
                }
            </ul>
        </div>
    )
};

export default Home;