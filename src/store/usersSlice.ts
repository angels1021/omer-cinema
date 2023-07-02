import { createSlice, createSelector } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {User} from '../models';

export interface UsersState {
    items: User[];
    initialized?: boolean;
    current?: string;
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
        },
        addUser: (state, { payload }: PayloadAction<User>) => {
            state.items.push(payload);
        },
        setActiveUser: (state, { payload }: PayloadAction<string>) => {
            state.current = payload;
        },
        logoutUser: (state) => {
            state.current = undefined;
        },
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

const selectCurrentUserId = createSelector(
    rootSelector,
    ({ current }) => current,
);

const selectActiveUser = createSelector(
    selectUsers,
    selectCurrentUserId,
    (users, current) => current !== undefined && users.find(u => u.uid === current),
);

export const usersSelectors = {
    selectUsers,
    selectIsInitialized,
    selectCurrentUserId,
    selectActiveUser,
}
