export interface User {
    id: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
}

export type SignupForm = Omit<User, 'id'>;

export type LoginForm = Pick<User, 'email'| 'password'>;

