import { createSlice } from '@reduxjs/toolkit';

type dataType = {
  isLoged: boolean;
  id: string;
  token: string;
  name: string;
  email: string;
  number: string;
};

const slice = createSlice({
  name: 'user',
  initialState: {
    isLoged: false,
    id: '',
    token: '',
    name: '',
    email: '',
    number: '',
  },

  reducers: {
    login(state: dataType, { payload: data }) {
      return {
        ...state,
        isLoged: data.isLoged,
        id: data.id,
        name: data.name,
        email: data.email,
        number: data.number,
        token: data.token,
      };
    },
  },
});

export const { login } = slice.actions;

export default slice.reducer;
