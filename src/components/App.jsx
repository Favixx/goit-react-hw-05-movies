import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Header = lazy(() => import('./Header/Header'));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <Routes>
          <Route path='/' element={<Header />} >
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Suspense >
  );
};
export default App;