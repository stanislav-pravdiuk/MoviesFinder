import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "services/fetchAPI";

function Reviews() {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
        const fetchParams = `movie/${movieId}/reviews?api_key=`;

    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setReviews(response.results[0].url))
            .catch(error => { console.log(error) });
    }, [fetchParams]);

    console.log(reviews)
    
    return <div><a href={reviews}>reviews</a></div>;
};

export default Reviews;