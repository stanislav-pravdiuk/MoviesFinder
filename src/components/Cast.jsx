const { useParams } = require('react-router-dom')

export const Cast = () => {
    const { movieId } = useParams();
    return <div>Cast: { movieId }</div>;
};