import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "services/fetchAPI";

function Cast() {

    const [cast, setCast] = useState([])
    const { movieId } = useParams();
    const fetchParams = `movie/${movieId}/credits?api_key=`;

    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setCast(response.cast))
            .catch(error => { console.log(error) });
    }, [fetchParams]);

    return (<div>
        <ul>
            {cast.map(artist => {
                return <li key={artist.id}>
                    {artist.original_name} ({artist.character})
                </li>
            })}
        </ul>
    </div>)
}

export default Cast;