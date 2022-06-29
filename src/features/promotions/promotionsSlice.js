import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = {
    promotionArray: PROMOTIONS
}

const promotionSlice = createSlice ({
    name: 'promotions',
    initialState
});

export const promotionsReducer = promotionSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionArray.find(
        (promotion) => promotion.featured);
};