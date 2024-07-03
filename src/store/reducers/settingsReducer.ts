import {
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from '@reduxjs/toolkit';

export type TSettingsReducer = {
  unstableSettings: {
    wallpaperTransition: boolean;
  };
};

const initialState: TSettingsReducer = {
  unstableSettings: {
    wallpaperTransition: false,
  },
};

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
