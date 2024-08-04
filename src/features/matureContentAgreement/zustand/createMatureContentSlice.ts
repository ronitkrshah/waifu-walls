/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';

type MatureContentAgreementState = {
  matureContentAgreement: {
    isAgreementAccepted: boolean;
  };
};

type MatureContentAgreementActions = {
  acceptMatureContentAgreement(): void;
};

export type MatureContentAgreementSlice = MatureContentAgreementState &
  MatureContentAgreementActions;

const initialState: MatureContentAgreementState = {
  matureContentAgreement: {isAgreementAccepted: false},
};

const createMatureContentAgreementSlice: StateCreator<
  MatureContentAgreementSlice,
  [['zustand/immer', never], never],
  [],
  MatureContentAgreementSlice
> = set => ({
  ...initialState,
  acceptMatureContentAgreement: () =>
    set(state => {
      state.matureContentAgreement.isAgreementAccepted = true;
    }),
});

export default createMatureContentAgreementSlice;
