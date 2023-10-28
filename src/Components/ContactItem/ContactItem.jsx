import { StyledFilterButton } from 'Components/Filter/Filter.styled';
import { StyledContactItemLi } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { Loader } from 'Components/Loader/Loader';

export const ContactIem = () => {
  const contacts = useSelector(state => state.contacts.contactsData);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.contacts.error);

  const filter = useSelector(state => state.filter.filterData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredContacts.map(({ name, phone, id }) => (
        <StyledContactItemLi key={id}>
          {name} : {[phone]}
          <StyledFilterButton
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </StyledFilterButton>
        </StyledContactItemLi>
      ))}
    </div>
  );
};
