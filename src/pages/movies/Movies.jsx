import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryMovies from 'services/queryAPI';
import css from './movies.module.css';
import Gallery from 'components/gallery/Gallery';

function Movies() {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const movieId = searchParams.get('movieId') ?? '';

    const fetchParams = `search/movie?api_key=`;
    const query = `&query=${movieId}`;

    useEffect(() => {
        if (movieId !== '') {
        searchMovie()
    }
    }, [fetchParams])
    
    function searchMovie() {
        queryMovies(fetchParams, query)
            .then(response => setMovies(response.results))
            .catch(error => { console.log(error) })
    };

    function updateQueryString(e) {
        if (e.target.value === '') {
            return setSearchParams({})
        }
        setSearchParams({movieId: e.target.value})
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchMovie();
        }   
    };

    return (
        <div>
            <div className={css.searchbar}>
                <form className={css.searchForm}>
                    <input
                    className={css.searchForm__input}
                    type="text"
                    value={movieId}
                    onChange={updateQueryString}
                    onKeyDown={handleKeyDown}
                    />
                </form>
            </div>
            <Gallery object={movies} />
        </div>
    )
};

export default Movies;