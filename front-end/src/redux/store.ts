import { configureStore } from '@reduxjs/toolkit';
import user from './reduces/user';

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
