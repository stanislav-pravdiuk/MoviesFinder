import { useEffect, useState } from 'react';
import getMovies from 'services/fetchAPI';
import Gallery from 'components/gallery/Gallery';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const fetchParams = `trending/all/day?api_key=`;

    useEffect(() => {
            getMovies(fetchParams)
                .then(response => setPopularMovies(response.results))
                .catch(error => { console.log(error) });
    }, [fetchParams]);

    return (
        <Gallery
            object={popularMovies}
        />
    )
};

export default Home;