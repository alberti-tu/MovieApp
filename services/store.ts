import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import catalog from '../data/catalog'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whiteList: []
}

const rootReducer = combineReducers({
  [catalog.name]: catalog.reducer
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck:false }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()