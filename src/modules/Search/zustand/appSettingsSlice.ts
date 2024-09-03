/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';

type PreviousSearchState = {
  previousSearchs: Array<string>;
};

type PreviousSearchActions = {
  removeSearch(search: string): void;
  addSearch(search: string): void;
};

export type PreviousSearchSlice = PreviousSearchState & PreviousSearchActions;

const initialState: PreviousSearchState = {
  previousSearchs: [],
};

export const createPreviousSearchSlice: StateCreator<
  PreviousSearchSlice,
  [['zustand/immer', never], never],
  [],
  PreviousSearchSlice
> = set => ({
  ...initialState,
  addSearch(search) {
    set(state => {
      !state.previousSearchs.includes(search) &&
        state.previousSearchs.push(search);
    });
  },
  removeSearch(search) {
    set(state => {
      state.previousSearchs = state.previousSearchs.filter(
        item => item !== search,
      );
    });
  },
});
