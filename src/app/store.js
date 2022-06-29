import { configureStore } from '@reduxjs/toolkit';
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
});