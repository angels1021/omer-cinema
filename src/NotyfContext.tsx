import { createContext } from 'react';
import { Notyf } from 'notyf';

export default createContext(
    new Notyf({
        duration: 5000,
    })
)