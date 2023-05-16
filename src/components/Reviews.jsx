import { useParams } from "react-router-dom";

function Reviews() {
    const { movieId } = useParams();
    return <div>Reviews: {movieId}</div>;
};
export default Reviews;