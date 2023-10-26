import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contactsData: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contactsData = [...state.contactsData, action.payload];
      // state.contactsData.push(action.payload)
    },
    deleteContact(state, action) {
      state.contactsData = state.contactsData.filter(
        contactData => contactData.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts': {
//       return {
//         ...state,
//         contactsData: [...state.contactsData, action.payload],
//       };
//     }
//     case 'contacts/deleteContacts': {
//       return {
//         ...state,
//         contactsData: state.contactsData.filter(
//           contactData => contactData.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContacts = payload => {
//   return {
//     type: 'contacts/addContacts',
//     payload,
//   };
// };
// export const deleteContacts = payload => {
//   return {
//     type: 'contacts/deleteContacts',
//     payload,
//   };
// };
