import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../../redux/auth';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isAuthorized = useSelector(isAuthenticated);

  return (
    <ul className={styles.wrap}>
      {routes.map(({ name, path, exact, isNavLink }) => {
        if (!isAuthorized && name === 'Contacts') return null;

        return (
          isNavLink && (
            <li key={path} className={styles.items}>
              <NavLink
                to={path}
                exact={exact}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                {name}
              </NavLink>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Navigation;
