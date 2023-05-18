import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useRef, Suspense, useEffect, useState } from "react";
import getMovies from "services/fetchAPI";
import css from './movies-details.module.css';

function MovieDetails() {
    const [movieDetails, setMovieDitails] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const fetchParams = `movie/${movieId}?api_key=`;
    const poster = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;
    
    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setMovieDitails(response))
            .catch(error => { console.log(error) });
    }, [fetchParams]);

    return <div className={css.info}>
        <Link to={backLinkLocationRef.current}>Back</Link>
        
        <h1 className={css.info__title}>{movieDetails.original_title}</h1>

        <div className={css.info__content}>
            <img className={css.info__poster} src={poster} alt={movieDetails.title} />
            <section>
                <p>Release date {movieDetails.release_date}</p>
                <p>Budget {movieDetails.budget}$</p>
                <p>{movieDetails.overview}</p>   
            </section>
        </div>        
        <ul>
            <li>
                <Link to='cast'>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
        </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>;

};

export default MovieDetails;