import { createSlice } from '@reduxjs/toolkit';
import { Item } from 'models/nasa-images/search-result';
import { PayloadAction } from '@reduxjs/toolkit';

interface NasaImagesState {
  query: string;
  hits: number;
  results: Array<Item>;
  currentPage: number;
}

const initialState: NasaImagesState = {
  query: '',
  hits: 0,
  results: [],
  currentPage: 0
}

const slice = createSlice({
  name: 'nasaImages',
  initialState: initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<NasaImagesState>) =>  {
      state.query = action.payload.query
      state.hits = action.payload.hits
      state.results = action.payload.results
      state.currentPage = action.payload.currentPage
    }
  }
})

// Export the reducer as well as the actions
export default slice.reducer
export const { setSearchResults } = slice.actions
