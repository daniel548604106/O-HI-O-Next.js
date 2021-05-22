import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import {globalReducer } from './reducers/globalReducer'
const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer
  }
})

export default store