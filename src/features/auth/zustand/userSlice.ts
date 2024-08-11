/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';
import {User} from '../dto/UserDTO';

type UserState = {
  user: {
    isAuthenticated: boolean;
  } & User;
};

type UserActions = {
  setUser(user: User): void;
  removeUser(): void;
};

export type UserSlice = UserState & UserActions;

const initialState: UserState = {
  user: {
    userId: '',
    name: '',
    email: '',
    isAdmeme: false,
    isAuthenticated: false,
  },
};

const createUserSlice: StateCreator<
  UserSlice,
  [['zustand/immer', never], never],
  [],
  UserSlice
> = set => ({
  ...initialState,
  setUser: user =>
    set(state => {
      state.user = {...user, isAuthenticated: true};
    }),
  removeUser: () =>
    set(state => {
      state.user = initialState.user;
    }),
});

export default createUserSlice;
