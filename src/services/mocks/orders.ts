import {Order, OrderForm} from '../../models';
import {nanoid} from "nanoid";

const orderList: Order[] = [];

export const addOrder = (form: OrderForm) => {
    const order = { ...form, id: nanoid() };

    orderList.push(order);
    return order;
}

export default orderList;
