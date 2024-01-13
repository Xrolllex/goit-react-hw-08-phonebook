import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import css from '../general.module.css';


const ElementItem = ({ contact }) => {
  const dispatch = useDispatch();

  // Sprawdź, czy "contact" istnieje, zanim spróbujesz uzyskać dostęp do jego właściwości
  if (!contact) {
    return null; // Lub obsłuż przypadek, gdy "contact" nie jest dostępny
  }

  const deleteContact = () => dispatch(removeContact(contact.id));

  return (
    <li>
      {contact.name} {contact.number}{' '}
      <button className={css.btn} type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ElementItem;
