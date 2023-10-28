import axios from 'axios';

export const getContacts = async () => {
  const { data } =
    await axios.get(`https://653cc41fd5d6790f5ec84281.mockapi.io/contacts
`);
  console.log(data);
  return data;
};

// getContacts();

export const addNewContact = async contact => {
  const { data } = await axios.post(
    `https://653cc41fd5d6790f5ec84281.mockapi.io/contacts/`,
    contact
  );
  return data;
};
// export const deleteContact = async () => {
//   const { data } =
//     await axios.delete(`https://653cc41fd5d6790f5ec84281.mockapi.io/contacts/:id
// `);
//   return data;
// };
