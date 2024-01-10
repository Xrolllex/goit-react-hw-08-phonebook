import { createReducer } from '@reduxjs/toolkit';
import { addNewContactAsync, deleteContactAsync, fetchContactsAsync, updateFilter} from '../redux/actions';

const initialState = {
  contacts: [],
  filter: ''
};


const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(fetchContactsAsync.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(addNewContactAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContactAsync.fulfilled, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
  });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(updateFilter, (state, action) => {
        return action.payload;
  });
});

export { contactsReducer, filterReducer };