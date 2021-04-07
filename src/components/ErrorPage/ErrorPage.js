import React from 'react';
import { useSelector } from 'react-redux';
import { getErrorMessage } from '../../redux/error';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const message = useSelector(getErrorMessage);

  return (
    <div className={styles.wrap}>
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorPage;
