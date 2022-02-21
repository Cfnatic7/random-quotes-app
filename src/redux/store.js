import { configureStore, createSlice } from '@reduxjs/toolkit'
import {quotes} from '../assets/quotes';
const Slice = createSlice({
  name: 'random_quote_getter',
  initialState: {
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  },
  reducers: {
    getNewQuote: (state) => {
      state.quote = quotes[Math.floor(Math.random() * quotes.length)];
    }
  }
})

export default configureStore({
  reducer: {
    getNewQuote: Slice.reducer
  }
})

export const {getNewQuote} = Slice.actions;