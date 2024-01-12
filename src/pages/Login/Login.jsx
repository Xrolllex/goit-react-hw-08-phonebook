import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './Login.module.css';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    return dispatch(login({ email, password }));
  };

  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form className={css.login} onSubmit={handleLogin}>
        <label className={css.label}>Email:</label>
        <input className={css.input} type="email" name="email" />
        <label className={css.label}>Password:</label>
        <input className={css.input} type="password" name="password" autoComplete="off" />
        <button className={css.btn} type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;