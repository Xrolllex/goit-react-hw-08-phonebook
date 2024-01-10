import { configureStore } from '@reduxjs/toolkit';
import * as actions from './actions';
import { contactsReducer, filterReducer } from './reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
});

export default store;
export { actions };
