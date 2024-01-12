import { useDispatch } from 'react-redux';
import css from './Register.module.css';
import { register } from '../../redux/auth/operations';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const name = event.currentTarget.username.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    return dispatch(register({ name, email, password }));
  };

  return (
    <main>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form className={css.register} onSubmit={handleRegister}>
        <label className={css.label}>User name:</label>
        <input className={css.input} name="username" />
        <label className={css.label}>Email:</label>
        <input className={css.input} type="email" name="email" />
        <label className={css.label}>Password:</label>
        <input className={css.input} type="password" name="password" autoComplete="off" />
        <button className={css.btn}type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;