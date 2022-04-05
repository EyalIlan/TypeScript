import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './reducers/movie'


export const store = configureStore({
    reducer:{
      movie:movieSlice.reducer
    }
  })
  
export type RootState = ReturnType<typeof store.getState>



