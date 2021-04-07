import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../Navigation/AuthNav';
import Navigation from '../Navigation';
import { isAuthenticated } from '../../redux/auth';
import Layout from '../Layout';
import UserMenu from '../UserMenu';
import PropTypes from 'prop-types';

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

AppBar.defaultProps = {
  isAuthenticated: null,
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default AppBar;
