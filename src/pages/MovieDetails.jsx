import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useRef, Suspense, useEffect, useState } from "react";
import getMovies from "services/fetchAPI";

function MovieDetails() {
    const [movieDetails, setMovieDitails] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const fetchParams = `movie/${movieId}?api_key=`;
    
    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setMovieDitails(response))
            .catch(error => { console.log(error) });
    }, [fetchParams]);

    return <div>
        <h1>{movieDetails.original_title}</h1>
        <Link to={backLinkLocationRef.current}>Back</Link>
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