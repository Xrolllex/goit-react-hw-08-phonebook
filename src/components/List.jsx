import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/store';
import ContactItem from './Contact';


const { deleteContactAsync, updateFilter } = actions;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <label htmlFor="filterInput">
        Find contacts by name
        <input
          id="filterInput"
          className="input"
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContactAsync(contact.id))}
          />
        ))}
      </ul>
    </>
  );
};



export default ContactList;
