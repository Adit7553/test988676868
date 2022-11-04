import { createSlice } from '@reduxjs/toolkit'

export const inputBarSlice = createSlice({
  name: 'INPUTBAR',
  initialState: {},
  reducers: {
    updateValue : (state, action) => {
       state[action.payload.insden] = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {updateValue} = inputBarSlice.actions

export default inputBarSlice.reducer