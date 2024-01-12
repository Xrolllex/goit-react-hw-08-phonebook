import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm/Form';
import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';
import css from '../Contacts/Contacts.module.css'

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title className={css.link}>Contacts</title>
      </Helmet>
      <div className={css.section}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading && error && <b>Loading...</b>}
      <List />
      </div>
    </main>
  );
};

export default Contacts;