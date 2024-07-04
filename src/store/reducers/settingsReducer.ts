import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type TSettingsReducer = {};

const initialState: TSettingsReducer = {};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateAppSettingsGlobalStore(_, action: PayloadAction<TSettingsReducer>) {
      return {...action.payload};
    },
  },
});

export const {updateAppSettingsGlobalStore} = settingsSlice.actions;
export default settingsSlice.reducer;
