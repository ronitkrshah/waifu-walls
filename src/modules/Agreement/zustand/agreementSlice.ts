/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';

type AgreementState = {
  matureContentAgreement: {
    isAgreementAccepted: boolean;
  };
};

type AgreementActions = {
  acceptMatureContentAgreement(): void;
};

export type AgreementSlice = AgreementState &
  AgreementActions;

const initialState: AgreementState = {
  matureContentAgreement: {isAgreementAccepted: false},
};

export const createAgreementSlice: StateCreator<
  AgreementSlice,
  [['zustand/immer', never], never],
  [],
  AgreementSlice
> = set => ({
  ...initialState,
  acceptMatureContentAgreement: () =>
    set(state => {
      state.matureContentAgreement.isAgreementAccepted = true;
    }),
});

