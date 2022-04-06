import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './reducers/movie'
import LoaderSlice from './reducers/loader';

export const store = configureStore({
    reducer:{
      movie:movieSlice.reducer,
      loader:LoaderSlice.reducer
    }
  })
  
export type RootState = ReturnType<typeof store.getState>



