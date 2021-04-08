import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { fetchContacts, getTotalCount } from '../redux/contacts';
import { getErrorMessage } from '../redux/error';
import { getLoading } from '../redux/loading/loading-selector';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';

const ContactsPage = () => {
  const loading = useSelector(getLoading);
  const errorMessage = useSelector(getErrorMessage);
  const totalCount = useSelector(getTotalCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      {loading && <Spinner />}
      {errorMessage && <ErrorPage />}
      {totalCount !== 0 && <ContactList />}
    </Layout>
  );
};

export default ContactsPage;
