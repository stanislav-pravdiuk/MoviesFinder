import { useParams } from "react-router-dom";

function MovieDetails() {
    const {movieId} = useParams();
    
        // пропсы, стейты
    // useEffect(() => {
    //     http запрос
    // }, []);

    return <>MovieDetails: {movieId}</>;
};

export default MovieDetails;