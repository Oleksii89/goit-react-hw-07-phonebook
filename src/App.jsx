import ContactForm from 'Components/ContactForm/ContactForm';
import { ContactIem } from 'Components/ContactItem/ContactItem';
import { ContactList } from 'Components/ContactList/ContactList';
import { Filter } from 'Components/Filter/Filter';

// import { useDispatch, useSelector } from 'react-redux';
// import { addContacts, deleteContacts } from 'redux/contactsSlice';
// import { setFilter } from 'redux/filterSlice';

const App = () => {
  // const contacts = useSelector(state => state.contacts.contactsData);

  // const filter = useSelector(state => state.filter.filterData);

  // const dispatch = useDispatch();

  // const handleFilter = evt => {
  //   dispatch(setFilter(evt.currentTarget.value));
  // };

  // const getVisibleContact = () => {
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const getContact = data => {
  //   contacts.some(
  //     contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //   )
  //     ? alert(`${data.name} is already in contacts`)
  //     : dispatch(addContacts(data));
  // };

  // const handleDelete = contactId => {
  //   dispatch(deleteContacts(contactId));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactIem />
      </ContactList>
    </div>
  );
};

export default App;
