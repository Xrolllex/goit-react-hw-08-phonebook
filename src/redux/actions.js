import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiActions from 'components/Api';

const { fetchContacts, addNewContact, deleteContact } = apiActions;

export const fetchContactsAsync = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
      const response = await fetchContacts();
      return response;
    }
  );
  
  export const addNewContactAsync = createAsyncThunk(
    'contacts/addNewContact',
    async (contact) => {
      const response = await addNewContact(contact);
      return response;
    }
  );
  
  export const deleteContactAsync = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId) => {
      await deleteContact(contactId);
      return contactId;
    }
  );
  
  export const updateFilter = createAction('filter/update'); 

