import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './Logout.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    return dispatch(logout());
  };
  return (
    
    <button className={css.btn}type="button" onClick={handleLogout}>
      Logout
    </button>
    
  );
};

export default LogoutBtn;