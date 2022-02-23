import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index';
import { useContext } from 'react';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1 style={{ paddingTop: 50 }}>Добро пожаловать!</h1>
          </>
        }
      />
      {isAuth
        ? privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))
        : publicRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}

      <Route
        path="*"
        element={isAuth ? <Navigate to="/error" /> : <Navigate to="/login" />}
      />
      {/* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} /> */}
    </Routes>
  );
};

export default AppRouter;
