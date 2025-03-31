import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    clearUser: (state) => {
      state.firstName = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;