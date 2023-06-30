import { api } from './apiConfig';
import { Movie } from '../models';

export const getMovies = (): Promise<{ data: Movie[] }> => api.get('/movies');

export const getMovieById = (id: Movie['id']): Promise<Movie> => api.get(`/movies/${id}`);

export const addMovie = (form: Movie) => api.post('/movies', form);
