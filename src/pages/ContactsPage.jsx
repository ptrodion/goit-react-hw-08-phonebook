import { Contacts } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactsForm/ContactsForm';
import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsFilter } from 'components/ContactsFilter/Filter';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchContacts(signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div
      style={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <div>
          <h2
            style={{
              display: 'block',
              width: '180px',
              margin: '0 auto',
              marginBottom: '10px',
            }}
          >
            Add contacts
          </h2>
          <ContactForm />
        </div>

        <div>
          <h2
            style={{
              display: 'block',
              width: '180px',
              margin: '0 auto',
              marginBottom: '10px',
            }}
          >
            Filter contacts
          </h2>
          <ContactsFilter />
        </div>
      </div>

      <Contacts />
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="loading"
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          wrapperClassName
        />
      )}
    </div>
  );
};
