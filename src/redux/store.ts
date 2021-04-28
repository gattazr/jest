import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import nasaImages from 'redux/reducers/nasa-images'

const reducer = combineReducers({
  nasaImages
})

const store = configureStore({
  reducer: reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
