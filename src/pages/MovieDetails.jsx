import { Outlet, useParams, Link } from "react-router-dom";

function MovieDetails() {
    const {movieId} = useParams();
    
        // пропсы, стейты
    // useEffect(() => {
    //     http запрос
    // }, []);

    return <div>
        <h1>MovieDetails: {movieId}</h1>
        <ul>
            <li>
                <Link to='cast'>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
        </ul>
        <Outlet />
        </div>;

};

export default MovieDetails;