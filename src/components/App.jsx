import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies/>} />
          <Route path='movies/:movieId' element={<MovieDetails/>} />
          <Route path='movies/:movieId/cast' element={<div>Cast</div>} />
          <Route path='movies/:movieId/reviews' element={<div>Reviews</div>} />
        </Route>
      </Routes>
  );
};