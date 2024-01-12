import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import LogoutBtn from '../Logout/Logout';
import css from './Menu.module.css'


const MenuBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <>
       <header className={css.menuBar}>
        {isLoggedIn ? (
          <>
            <NavLink className={css.links} to="/">Contacts</NavLink>
            <div>Welcome {userName}</div>
            <LogoutBtn />
          </>
        ) : (
          <div className={css.loginsBtn}>
            <NavLink className={css.links} to="/login">Login</NavLink>
            <NavLink className={css.links} to="/register">Register</NavLink>
          </div>
        )}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MenuBar;