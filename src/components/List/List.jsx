import Item from '../ContactItem/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';

const List = () => {
  const filter = useSelector(selectFilteredContacts);

  const list = filter.map(contact => (
    <Item key={contact.id} contact={contact} />
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default List;