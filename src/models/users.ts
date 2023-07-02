export interface User {
    uid: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
}

export type SignupForm = Omit<User, 'uid'>;

export type LoginForm = Pick<User, 'email'| 'password'>;

