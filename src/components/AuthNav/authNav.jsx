import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <MenuItem>
        <NavLink style={{ textDecoration: 'none' }} to="/login">
          Login
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink style={{ textDecoration: 'none' }} to="/register">
          Register
        </NavLink>
      </MenuItem>
    </>
  );
};
