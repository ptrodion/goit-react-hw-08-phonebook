import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNavigation = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
