import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './reducers/movie'
import LoaderSlice from './reducers/loader';

export const store = configureStore({
    reducer:{
      data:dataSlice.reducer,
      loader:LoaderSlice.reducer,
    }
  })


export type RootState = ReturnType<typeof store.getState>



