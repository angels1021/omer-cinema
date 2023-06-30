import { createSlice, createSelector } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Order} from '../models';

export interface OrdersState {
    items: Order[];
}

const initialState: OrdersState = {
    items: [],
};

export const { actions: ordersActions, reducer: ordersReducer } = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state, { payload }: PayloadAction<Order[]>) => {
            state.items = payload;
        }
    }
});

const rootSelector = (state: { orders: OrdersState }) => state.orders;

export const ordersSelectors = {
    selectOrders: createSelector(
        rootSelector,
        ({ items }) => items,
    ),
}
