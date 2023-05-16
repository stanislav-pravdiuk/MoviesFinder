const { useParams } = require('react-router-dom')

export const Reviews = () => {
    const { movieId } = useParams();
    return <div>Reviews: {movieId}</div>;
};