import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import films from './mocks/films.json';
import events from './mocks/events.json';

// export const api = axios.create({
//     baseURL: 'http://localhost:8000/api'
// });

export const api = axios.create();

const mock = new MockAdapter(api);

mock.onGet('/movies').reply(200, films);

mock.onGet(/\/users\/\d+/).reply((config) => {
    const paths = config.url?.split('/') || [];
    const id = paths[paths.length -1];

    return [200, films.find(f => f.id === id)];
});
