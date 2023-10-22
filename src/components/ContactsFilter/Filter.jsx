import { useDispatch } from 'react-redux';
import { ContactsFilterByName } from './Filter.styled';
import { filterContacts } from 'redux/filter/slice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = evt => dispatch(filterContacts(evt.target.value));
  return (
    <div>
      <label>
        <ContactsFilterByName
          type="text"
          name="filter"
          onChange={handleFilterChange}
          placeholder="Find contacts by name"
        />
      </label>
    </div>
  );
};
