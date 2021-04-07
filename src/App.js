import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLoginUser } from './redux/auth';
import AppBar from './components/AppBar';
import Layout from './components/Layout';
import NavigationRoutes from './components/Navigation/NavigationRouters';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Layout>
        <NavigationRoutes />
      </Layout>
    </>
  );
};

export default App;
