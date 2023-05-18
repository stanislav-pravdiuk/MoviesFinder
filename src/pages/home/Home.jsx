import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMovies from 'services/fetchAPI';
import css from './home.module.css'

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const location = useLocation();
    const fetchParams = `trending/all/day?api_key=`;

    useEffect(() => {
            getMovies(fetchParams)
                .then(response => setPopularMovies(response.results))
                .catch(error => { console.log(error) });
    }, [fetchParams]);

    return (
        <div>
            <ul className={css.imageGallery}>
                {popularMovies.map(movie => {
                    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    return <li
                            key={movie.id}
                            className={css.imageGallery__item}>
                                <Link state={{ from: location}} to={`/movies/${movie.id}`}>
                                    <img className={css.imageGalleryItem__image} src={poster} alt={movie.poster_path} />
                                    <p className={css.titleGalleryItem__image}>{movie.title ?? movie.name }</p>
                                </Link>
                            </li>
                })
                }
            </ul>
        </div>
    )
};

export default Home;