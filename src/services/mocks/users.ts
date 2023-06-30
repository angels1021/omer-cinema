import { User } from '../../models';

const userList: User[] = [];

export const addUser = (form: User) => {
    userList.push(form);
    return { ...form, password: null };
}

export default userList;
