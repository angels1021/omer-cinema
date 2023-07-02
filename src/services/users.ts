import { api } from './apiConfig';
import { User } from '../models';

export const getUsers = (): Promise<{ data: User[] }> => api.get('/users');

export const getUserById = (id: User['uid']): Promise<User> => api.get(`/users/${id}`);

export const createUser = (form: User) => api.post('/users', form);
