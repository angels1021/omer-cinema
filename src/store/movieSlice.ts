import { createSlice, createSelector } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";

import {Movie} from '../models';

export interface MovieState {
    items: Movie[];
}

const initialState: MovieState = {
    items: [],
};

const { actions: moviesActions, reducer: moviesReducer } = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
            state.items = payload;
        }
    }
});

const rootSelector = (state: { movies: MovieState }) => state.movies;

const moviesSelectors = {
    selectMovies: createSelector(
        rootSelector,
        ({ items }) => items,
    ),
}

export {
    moviesSelectors,
    moviesActions,
    moviesReducer,
};
