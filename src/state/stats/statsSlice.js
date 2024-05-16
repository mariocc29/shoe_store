import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  total: 0,
  growth: {
    changeInCount: 0,
    percentageChange: 0 
  }
}

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    update: (state, { payload }) => {
      console.log(payload)
    }
  },
})

export const { update } = statsSlice.actions

export default statsSlice.reducer