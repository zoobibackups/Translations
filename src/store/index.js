import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import languageReducer from './reducers/languageReducer';
const languageReducerPersistConfig = {
  key: 'selectedLanguage1122',
  storage: AsyncStorage,
  whitelist: ['selectedLanguage'],
};

const rootReducer = combineReducers({
  languageReducer: persistReducer(
    languageReducerPersistConfig,
    languageReducer,
  ),
 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
