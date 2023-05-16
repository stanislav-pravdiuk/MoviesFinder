import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useRef, Suspense } from "react";

function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    
        // пропсы, стейты
    // useEffect(() => {
    //     http запрос
    // }, []);

    return <div>
        <h1>MovieDetails: {movieId}</h1>
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