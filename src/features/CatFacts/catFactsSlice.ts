import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import axios from "axios";

interface CatFactsState {

}

const initialState: CatFactsState = {

}

export const catsSlice = createSlice({
  name: 'catsSlice',
  initialState,
  reducers: { },
});

// Faire une fonction fetchCatFacts
// Pour accéder au text des fun facts c'est response.data[i].text
// await axios.get('https://cat-fact.herokuapp.com/facts')

export const { } = catsSlice.actions
export default catsSlice.reducer;
