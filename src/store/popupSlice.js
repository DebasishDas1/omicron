import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about_omicron: false,
  omicron_symptoms: false,
  DNA_structur_of_omicron: false,
  Recommended_actions: false,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open_about_omicron: (state) => {
      state.about_omicron = true;
    },
    close_about_omicron: (state) => {
      state.about_omicron = false;
    },
    open_omicron_symptoms: (state) => {
      state.omicron_symptoms = true;
    },
    close_omicron_symptoms: (state) => {
      state.omicron_symptoms = false;
    },
    open_DNA_structur_of_omicron: (state) => {
      state.DNA_structur_of_omicron = true;
    },
    close_DNA_structur_of_omicron: (state) => {
      state.DNA_structur_of_omicron = false;
    },
    open_Recommended_actions: (state) => {
      state.Recommended_actions = true;
    },
    close_Recommended_actions: (state) => {
      state.Recommended_actions = false;
    },
  },
})

export const pupupActions = popupSlice.actions;

export default popupSlice.reducer;