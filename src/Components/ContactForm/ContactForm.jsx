import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled.';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contactsData);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    getContact({ name: name, number: number, id: nanoid() });
    setName(''); // clear input
    setNumber(''); // clear input
  };

  const getContact = data => {
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContact(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
