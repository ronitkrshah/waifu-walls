import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type TSettingsReducer = {
  setupCompleted: boolean;
};

const initialState: TSettingsReducer = {
  setupCompleted: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetupCompleted: (state, action: PayloadAction<boolean>) => ({
      ...state,
      setupCompleted: action.payload,
    }),
    updateAppSettings: (_, action: PayloadAction<TSettingsReducer>) => ({
      ...action.payload,
    }),
  },
});

export const {setSetupCompleted, updateAppSettings} = settingsSlice.actions;
export default settingsSlice.reducer;
