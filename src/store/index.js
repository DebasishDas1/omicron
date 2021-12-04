import { configureStore } from '@reduxjs/toolkit'
import popupSlice from './popupSlice'
import totalCountSlice from './totalCount'

const index = configureStore({
  reducer: {
    popup: popupSlice,
    totalCount: totalCountSlice,
  },
})

export default index;