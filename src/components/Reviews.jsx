import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "services/fetchAPI";

function Reviews() {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
        const fetchParams = `movie/${movieId}/reviews?api_key=`;

    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setReviews(response.results))
            .catch(error => { console.log(error) });
    }, [fetchParams]);
    
    return<div>
                <ul>
                    {reviews.map(review => {
                        return <li key={review.id}>
                            <a href={review.url}>{review.author}</a>
                        </li>
                    })}
                </ul>
            </div>
};

export default Reviews;