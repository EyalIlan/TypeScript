import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './reducers/movie'
import LoaderSlice from './reducers/loader';
import featuresSlice from './reducers/features';


export const store = configureStore({
    reducer:{
      data:dataSlice.reducer,
      loader:LoaderSlice.reducer,
      features:featuresSlice.reducer
    }
  })


export type RootState = ReturnType<typeof store.getState>



