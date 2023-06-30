import {useState, ChangeEvent} from 'react';
import {Button, Modal, Form} from "react-bootstrap";

import { createOrder } from "../../../services";


interface Props {
    movieTitle: string;
    movieId: string;
    userId: string;
    onClose: () => void;
}

const OrderTicketsForm = ({ movieTitle, movieId, userId, onClose }: Props) => {
    const [tickets, setTickets] = useState(1);
    const isValid = tickets > 0 && tickets < 8;

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => ev.target && setTickets(Number(ev.target?.value || 1));

    const handleSubmit = () => {
        if (isValid) return;

        createOrder({ tickets, mid: movieId, uid: userId });
        onClose();
    }

    return (
        <>
            <Modal.Body>
                <Form.Group controlId="ticketCount" className="d-flex gap-2 justify-content-center">
                    <span>Order</span>
                    <Form.Control
                        type="number"
                        min="1"
                        max="8"
                        size="sm"
                        onChange={handleChange}
                        value={tickets}
                        style={{ width: '4em' }}
                    />
                    tickets for {movieTitle}
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit} disabled={!isValid} >
                    Order Tickets
                </Button>
            </Modal.Footer>
        </>

    )
};

export default OrderTicketsForm;
