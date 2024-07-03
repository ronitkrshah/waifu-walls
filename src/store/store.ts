import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import settingsReducer from './reducers/settingsReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SETTINGS_KEY} from '@app/constants/keys';

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
  },
});

store.subscribe(() => {
  const currentState = store.getState();

  try {
    AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(currentState.settings));
  } catch (e) {
    // Ignore
  }
});

export type GlobalStoreRootState = ReturnType<typeof store.getState>;
