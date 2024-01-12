import { addContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import css from '../../pages/Register/Register.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const newContact = event => {
    event.preventDefault();
    const name = event.currentTarget['name'].value;
    const number = event.currentTarget['number'].value;

    if (contacts.some(check => check.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.some(check => check.number === number)) {
      alert(`This number ${number} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
    event.currentTarget.reset();

    return;
  };

  return (
    <>
      <form onSubmit={newContact}>
        <p className={css.label}>Name</p>
        <input className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <p className={css.label}>Number</p>
        <input className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <br />
        <button  className={css.btn} type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;