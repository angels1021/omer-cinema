import { api } from './apiConfig';
import { Movie } from "../models";

export const getMovies = (): Promise<{ data: Movie[] }> => api.get('/movies');

export const getMovieById = (id: Movie['id']): Promise<Movie> => api.get(`/movies/${id}`);

export const addMovie = ({ id, name, length, posterLink, videoLink, releaseYear }: Movie) => api.post('/movies', {
    id, name, length, posterLink, videoLink, releaseYear
});
