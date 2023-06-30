export interface Order {
    id: string;
    uid: string;
    mid: string;
    tickets: number;
}

export type OrderForm = Omit<Order, 'id'>;