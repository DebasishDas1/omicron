import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total_case_count: 375,
    total_death_count: 0,
    total_recovered_count: 0,
    active_cases: 375,
}

export const totalCountSlice = createSlice({
  name: 'totalCount',
  initialState,
  reducers: {
    update_total_case_count: (state, action) => {
        state.total_case_count = action.payload ;
    },
    update_total_death_count: (state, action) => {
        state.total_death_count = action.payload;
    },
    update_total_recovered_count: (state, action) => {
        state.total_recovered_count = action.payload;
    },
    update_active_cases: (state, action) => {
        state.active_cases = action.payload;
    },
  },
})

export const totalCountActions = totalCountSlice.actions;

export default totalCountSlice.reducer;