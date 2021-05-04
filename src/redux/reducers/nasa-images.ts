import { createSlice } from '@reduxjs/toolkit';
import { Item, SearchResult } from 'models/nasa-images/search-result';
import { PayloadAction } from '@reduxjs/toolkit';

interface NasaImagesState {
  query: string;
  hits: number;
  results: Array<Item>;
  currentPage: number;
}

// Define the initial state using that type
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
    setSearchResults: (state, action: PayloadAction<SearchResult>) =>  {
      state.results = action.payload.items
      state.hits = action.payload.metadata.total_hits
      state.currentPage = 1
    },
    changePage: (state, action: PayloadAction<number>) =>  {
      // TODO: Complete
    }
  }
})

// Export the reducer as well as the actions
export default slice.reducer
export const { setSearchResults } = slice.actions
