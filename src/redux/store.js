import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import logger from './middlewares/logger'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})