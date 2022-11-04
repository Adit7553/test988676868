import { configureStore } from '@reduxjs/toolkit'
import inpurBarReducer from './slices/inputBarSlice'

export default configureStore({
  reducer: {
    INPUTBAR : inpurBarReducer
  },
})