import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filterData: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filterData = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return {
//         filterData: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const setFilter = payload => {
//   return {
//     type: 'filter/setFilter',
//     payload,
//   };
// };
