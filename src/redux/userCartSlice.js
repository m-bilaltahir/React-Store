import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0
}

export const userCartSlice = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value+=1
    },
  },
})

export const { increment} = userCartSlice.actions

export default userCartSlice.reducer