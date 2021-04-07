import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth';
import Spinner from '../components/Spinner';
import { getLoading } from '../redux/loading/loading-selector';
import { getErrorMessage } from '../redux/error';
import ErrorPage from '../components/ErrorPage';
import styles from '../components/ContactForm/ContactForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [state, setState] = useState(initialState);
  const loading = useSelector(getLoading);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();

  const handleChangeInput = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const { name, email, password } = state;

    if (name === '' && email === '' && password === '') return;

    dispatch(registerUser(state));
    reset();
  };

  const reset = () => setState({ ...initialState });

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Registration</h2>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.wrapLabel}>
          <label className={styles.label}>
            <p className={styles.text}>Name</p>
            <input
              type="text"
              name="name"
              value={state.name}
              placeholder=" "
              className={styles.input}
              onChange={handleChangeInput}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.text}>Email:</p>
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder=" "
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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

export default RegisterPage;
