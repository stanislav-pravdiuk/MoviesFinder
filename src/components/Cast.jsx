import { useParams } from "react-router-dom";

function Cast() {
    const { movieId } = useParams();
    return <div>Cast: { movieId }</div>;
};

export default Cast;