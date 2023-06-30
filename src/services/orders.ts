import { api } from './apiConfig';
import {Order, OrderForm} from '../models';

export const getOrders = (): Promise<{ data: Order[] }> => api.get('/orders');

export const createOrder = (form: OrderForm): Promise<Order> => api.post('orders', form);
