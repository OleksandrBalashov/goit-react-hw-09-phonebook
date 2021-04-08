import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactFilter from '../FilterContacts';
import { getVisibleContacts, deleteContact } from '../../redux/contacts';
import EditButton from './EditButton';
import styles from './Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = e => dispatch(deleteContact(e.target.dataset.id));

  return (
    <>
      <ContactFilter />
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <EditButton id={id} />
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
