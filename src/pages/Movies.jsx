import { Link } from 'react-router-dom';

function Movies() {
    return (

    <div>
        {["movie1", "movie2", "movie3", "movie4"].map(movie => {
            return <Link key={movie} to={`${movie}`}>
                        {movie}
                    </Link>
            })
            }
    </div>
    )
};

export default Movies;