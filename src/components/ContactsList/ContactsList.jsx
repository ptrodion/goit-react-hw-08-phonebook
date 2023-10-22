import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper, ContactsListSt, Title } from './ContactsList.styles';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/filter/selectors';

export const Contacts = () => {
  const visibleContacts = useSelector(filteredContacts);
  return (
    <ContactsWrapper>
      {' '}
      <Title>Contacts</Title>
      <>
        <ContactsListSt>
          {visibleContacts.map(item => (
            <ContactsItem key={item.id} item={item} />
          ))}
        </ContactsListSt>
      </>
    </ContactsWrapper>
  );
};
