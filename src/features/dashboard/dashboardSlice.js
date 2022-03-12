import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addData: (state, action) => {
       console.log('incoming redux store payload')
       state.data = [action.payload]
    }
  },
})

export const { addData } = dashboardSlice.actions

export default dashboardSlice.reducer