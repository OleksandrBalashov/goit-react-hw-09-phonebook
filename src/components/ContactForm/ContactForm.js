import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getEditContact,
  patchContacts,
  addContact,
} from '../../redux/contacts';
import styles from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
  id: '',
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const contact = useSelector(getEditContact);
  const userName = contact.name;

  useEffect(() => {
    const editContact = () => {
      setState({ ...contact });
    };

    editContact();
  }, [contact]);

  const handleInputChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handlerSubmitContactFrom = useCallback(
    e => {
      e.preventDefault();

      const { name, number, id } = state;
      if (name === '' && number === '') return;

      !!id
        ? dispatch(patchContacts(id, { name, number }))
        : dispatch(addContact(state));

      setState({ ...initialState });
    },

    [state, dispatch],
  );

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        {userName ? 'Edit contact' : 'Create contact'}
      </h2>
      <form className={styles.form} onSubmit={handlerSubmitContactFrom}>
        <div className={styles.wrapLabel}>
          <label className={styles.label}>
            <p className={styles.text}>Name</p>
            <input
              type="text"
              name="name"
              className={styles.input}
              value={state.name}
              placeholder=" "
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.text}>Phone</p>
            <input
              type="tel"
              name="number"
              className={styles.input}
              value={state.number}
              placeholder=" "
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className={styles.button}>
          {userName ? 'Edit contact' : 'Add contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
