import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  message: '#568a79',
  button: '#45449e',
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          padding: '5px',
          bgcolor: 'inherit',
        }}
      >
        Your personal phone book, {user.name}
      </p>
      <Button
        variant="contained"
        sx={{ bgcolor: theme.button, color: 'white' }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};
