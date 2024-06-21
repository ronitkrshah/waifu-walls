import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type User = {
  userId: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'admin' | undefined;
};

type UserReducerState = {
  user: User | null;
};

const initialState: UserReducerState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserGlobalStore: (state, action: PayloadAction<User | null>) => {
      return {...state, user: action.payload};
    },
  },
});

export const {setUserGlobalStore} = userSlice.actions;
export default userSlice.reducer;
