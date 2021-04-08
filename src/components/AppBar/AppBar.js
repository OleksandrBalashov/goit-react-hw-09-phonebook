import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../Navigation/AuthNav';
import Navigation from '../Navigation';
import { isAuthenticated } from '../../redux/auth';
import Layout from '../Layout';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.css';

const AppBar = () => {
  const isAuthorized = useSelector(isAuthenticated);
  return (
    <header className={styles.header}>
      <Layout>
        <nav className={styles.nav}>
          <Navigation />
          {!!isAuthorized ? <UserMenu /> : <AuthNav />}
        </nav>
      </Layout>
    </header>
  );
};

export default AppBar;
