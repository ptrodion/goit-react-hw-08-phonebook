import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  button: '#45449e',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#46747c',
  color: 'white',
  border: '2px solid #886767',
  boxShadow: 36,
  p: 5,
};

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={style}>
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '15px',
        }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Log in
      </Typography>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Email
          <input
            style={{
              marginLeft: '40px',
              borderColor: 'transparent',
              borderRadius: '10px',
              padding: '5px',
              flex: 1,
            }}
            type="email"
            name="email"
          />
        </label>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Password
          <input
            style={{
              marginLeft: '12px',
              borderColor: 'transparent',
              borderRadius: '10px',
              padding: '5px',
              flex: 1,
            }}
            type="password"
            name="password"
          />
        </label>
        <Button
          variant="contained"
          sx={{ bgcolor: theme.button, color: 'white' }}
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};
