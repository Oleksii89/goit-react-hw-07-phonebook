import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contactsData: [],
  isLoading: false,
  error: null,
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
