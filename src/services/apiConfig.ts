import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import films, { addMovie } from './mocks/films';
import users, { addUser } from './mocks/users';
import orders, { addOrder } from './mocks/orders';

// export const api = axios.create({
//     baseURL: 'http://localhost:5206/api'
// });

export const api = axios.create();

const mock = new MockAdapter(api);

// movies
mock.onGet('/movies').reply(200, films);

mock.onPost('/movies').reply(({data}) => [200, addMovie(JSON.parse(data))]);

// users
mock.onGet('/users').reply(200, users);

mock.onGet(/\/users\/\d+/).reply((config) => {
   const paths = config.url?.split('/') || [];
   const id = paths[paths.length -1];

   const existing = users.find(u => u.id === id);

   return existing ? [200, existing] : [404, 'user not found']
});

mock.onPost('/users').reply(({ data }) => [200, addUser(JSON.parse(data))]);

// orders
mock.onGet('/orders').reply(200, orders);

mock.onPost('/orders').reply(({data}) => [200, addOrder(JSON.parse(data))]);

