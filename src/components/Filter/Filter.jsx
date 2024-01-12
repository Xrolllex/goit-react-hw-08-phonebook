import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/contacts/filterSlice';
import css from '../../pages/Register/Register.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filtered = newFilterStatus => {
    const filterValue = newFilterStatus.target.value;
    dispatch(setFilterStatus(filterValue));
  };

  return (
    <>
      <p className={css.label}>Find contacts by name</p>
      <input className={css.input} type="text" onChange={filtered} />
      <br />
    </>
  );
};

export default Filter;