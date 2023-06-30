import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { BsFilm } from 'react-icons/bs';

import { usersSelectors } from "../../../store";
import OrderTicketsForm from './OrderTicketsForm';
import {Link} from "react-router-dom";

interface Props {
    movieTitle: string;
    movieId: string;
}

const OrderTickets = ({ movieTitle, movieId }: Props) => {
    const [show, setShow] = useState(false);
    const userId = useSelector(usersSelectors.selectCurrentUserId);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Order tickets
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><BsFilm /> Order Tickets</Modal.Title>
                </Modal.Header>
                {userId ? (
                    <OrderTicketsForm
                        userId={userId}
                        movieId={movieId}
                        movieTitle={movieTitle}
                        onClose={handleClose} />
                ) : (
                    <>
                        <Modal.Body>
                            please <Link to="/login">login</Link> or <Link to="/signup">sign up</Link> to order
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
}

export default OrderTickets;