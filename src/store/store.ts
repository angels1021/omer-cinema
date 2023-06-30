import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer} from './movieSlice';
import { usersReducer} from './usersSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        users: usersReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {movies: MoviesState, orders: OrdersState, users: UsersState}
export type AppDispatch = typeof store.dispatch;