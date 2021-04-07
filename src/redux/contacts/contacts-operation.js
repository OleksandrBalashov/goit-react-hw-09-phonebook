import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  patchContactSuccess,
  patchContactError,
  patchContactRequest,
  resetContact,
} from '../contacts';
import { resetError } from '../error';

const errorReset = dispatch => setTimeout(() => dispatch(resetError('')), 3000);

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
    errorReset(dispatch);
  }
};

export const addContact = contact => async (dispatch, getState) => {
  const {
    contacts: { items },
  } = getState();

  if (items.find(({ name }) => name === contact.name)) {
    alert(`${contact.name} is already in contacts`);
    return;
  }

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
    errorReset(dispatch);
  }
};

export const patchContacts = (id, contact) => async dispatch => {
  dispatch(patchContactRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, contact);

    dispatch(patchContactSuccess(data));
  } catch (error) {
    dispatch(patchContactError(error.message));
    errorReset(dispatch);
  } finally {
    dispatch(resetContact());
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
    errorReset(dispatch);
  }
};
