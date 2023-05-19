import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movie details/MovieDetails'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
  );
};