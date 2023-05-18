import { Link, useLocation } from 'react-router-dom';
import css from './gallery.module.css';
import PropTypes from 'prop-types';

function Gallery({ object }) {

    const location = useLocation();

    return (
        <ul className={css.imageGallery}>
                {object.map(movie => {
                    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
                    return <li
                            key={movie.id}
                            className={css.imageGallery__item}>
                                <Link state={{ from: location}} to={`/movies/${movie.id}`}>
                                    <img className={css.imageGalleryItem__image} src={poster} alt={movie.title} />
                                    <p className={css.titleGalleryItem__image}>{movie.title ?? movie.name}</p>
                                </Link>
                            </li>
                })
                }
            </ul>
    )
};

Gallery.propTypes = {
    object: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery