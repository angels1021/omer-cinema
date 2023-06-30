export interface Order {
    id: string;
    uid: number;
    mid: number;
    tickets: number;
}

export type OrderForm = Omit<Order, 'id'>;