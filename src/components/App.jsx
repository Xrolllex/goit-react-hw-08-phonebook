import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAsync } from '../redux/actions';
import ContactForm from './ContactForm/Form';
import ContactList from './List/List';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
