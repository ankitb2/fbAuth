import { configureStore } from '@reduxjs/toolkit'
import dashBoardReducer from "../features/dashboard/dashboardSlice"

export default configureStore({
  reducer: {
    dashboard: dashBoardReducer
  }
})