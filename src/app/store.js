import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnerReducer } from '../features/partners/partnerSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnerReducer,
    promotions: promotionsReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});