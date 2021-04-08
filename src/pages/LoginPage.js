import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import styles from '../components/ContactForm/ContactForm.module.css';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [state, setState] = useState(initialState);
  const loading = useSelector(getLoading);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmitForm = useCallback(
    e => {
      e.preventDefault();

      const { email, password } = state;

      if (email === '' && password === '') return;

      dispatch(loginUser(state));

      setState({ ...initialState });
    },
    [state, dispatch],
  );

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Enter our login</h2>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.wrapLabel}>
          <label className={styles.label}>
            <p className={styles.text}>Email:</p>
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder=" "
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.text}>Password:</p>
            <input
              stype="password"
              name="password"
              value={state.password}
              placeholder=" "
              className={styles.input}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Enter
        </button>
      </form>
      {loading && <Spinner />}
      {error && <ErrorPage />}
    </div>
  );
};

export default LoginPage;
