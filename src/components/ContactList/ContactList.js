import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactFilter from '../FilterContacts';
import {
  getVisibleContacts,
  editContact,
  deleteContact,
} from '../../redux/contacts';
import styles from './Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = e => dispatch(deleteContact(e.target.dataset.id));

  const filterEditContact = e => {
    const contact = contacts.find(({ id }) => id === e.target.dataset.id);
    dispatch(editContact(contact));
  };

  return (
    <>
      <ContactFilter />
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <button
              data-id={id}
              type="button"
              className={styles.button + ' ' + styles.buttonEdit}
              onClick={filterEditContact}
            >
              Edit
            </button>
            <button
              data-id={id}
              type="button"
              className={styles.button}
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
