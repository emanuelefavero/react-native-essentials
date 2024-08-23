import { createSlice } from '@reduxjs/toolkit'

const showAreYouSureModalSlice = createSlice({
  name: 'showAreYouSureModal',
  initialState: false,
  reducers: {
    setShowAreYouSureModal: (state, action) => action.payload,
  },
})

export const { setShowAreYouSureModal } = showAreYouSureModalSlice.actions

export default showAreYouSureModalSlice.reducer
