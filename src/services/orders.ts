import { api } from './apiConfig';
import {Order} from '../models';

export const getOrders = (): Promise<{ data: Order[] }> => api.get('/orders');

export const createOrder = (form: Order) => api.post('orders', form);
