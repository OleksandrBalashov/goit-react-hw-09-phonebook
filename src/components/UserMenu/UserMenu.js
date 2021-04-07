import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated } from '../../redux/auth';
import { logout } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logout());

  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <img
          src="https://freesvg.org/img/Male-Avatar.png"
          alt="phonebook"
          width="40"
          className={styles.avatar}
        />
        <span className={styles.text}>Welcome, {name}</span>
        <button type="button" className={styles.button} onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
