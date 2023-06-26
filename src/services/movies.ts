import { api } from './apiConfig';
import {Movie} from "../models";

export const getMovies = (): Promise<{ data: Movie[] }> => api.get('/movies');

export const getMovieById = (id: string): Promise<Movie> => api.get(`/movies/${id}`);