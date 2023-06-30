import { createSlice, createSelector } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {User} from '../models';

export interface UsersState {
    items: User[];
    initialized?: boolean;
}

const initialState: UsersState = {
    items: [],
    initialized: false,
};

export const { actions: usersActions, reducer: usersReducer } = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, { payload }: PayloadAction<User[]>) => {
            state.items = payload;
            state.initialized = true;
        }
    }
});

const rootSelector = (state: { users: UsersState }) => state.users;

const selectUsers = createSelector(
    rootSelector,
    ({ items }) => items,
);

const selectIsInitialized = createSelector(
    rootSelector,
    ({initialized}) => initialized,
);

export const usersSelectors = {
    selectUsers,
    selectIsInitialized,
}
