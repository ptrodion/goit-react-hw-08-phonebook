import { useDispatch } from 'react-redux';
import {
  ListItemSt,
  ListItemButtonSt,
  ContactsDate,
} from './ContactsItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ListItemSt key={id}>
      <ContactsDate>
        <span>{name}</span> <span>{number}</span>
      </ContactsDate>
      <ListItemButtonSt
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ListItemButtonSt>
    </ListItemSt>
  );
};
