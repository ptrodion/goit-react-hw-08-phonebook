import { useAuth } from 'hooks/useAuth';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={Register} />}
          />
        </Route>
      </Routes>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="loading"
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '70px',
          }}
          wrapperClassName
        />
      )}
    </>
  );
};
