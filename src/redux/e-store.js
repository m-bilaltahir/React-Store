import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from "./userDataSlice.js"
import userCartReducer from "./userCartSlice.js"
export const store = configureStore({
  reducer: {
    userData:userDataReducer,
    userCart:userCartReducer
  },
})