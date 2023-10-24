import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <MenuItem>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </MenuItem>
    </>
  );
};
