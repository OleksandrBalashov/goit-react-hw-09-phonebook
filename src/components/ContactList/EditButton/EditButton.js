import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFindEditContact, editContact } from '../../../redux/contacts';
import styles from '../Contacts.module.css';

const EditButton = ({ id }) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => getFindEditContact(state, id));

  const findEditContact = () => {
    dispatch(editContact(contact));
  };

  return (
    <button
      type="button"
      className={styles.button + ' ' + styles.buttonEdit}
      onClick={findEditContact}
    >
      Edit
    </button>
  );
};

export default EditButton;
