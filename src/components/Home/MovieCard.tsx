import { Badge, Card } from "react-bootstrap";
import { BsYoutube } from 'react-icons/bs';

import {Movie} from "../../models";
import OrderTickets from './OrderTickets';

const MovieCard = ({ id, name , posterLink, length, releaseYear, videoLink }: Movie) => {

    return (
        <Card key={id}>
            <Card.Img
                variant="top"
                src={posterLink}
                alt={name}
            />
            <Card.Body>
                <Card.Title className="d-flex gap-2 flex-wrap">
                    {name}
                </Card.Title>
                <div className="card-pills mb-3">
                    {!!length && <Badge pill bg="info">length: {length}min</Badge>}
                    {!!releaseYear && <Badge pill bg="dark">released: {releaseYear}</Badge>}
                </div>
                {videoLink && (
                    <Card.Link
                        href={videoLink}
                        title="watch trailer"
                        target="_blank"
                        className="link-secondary"
                    >
                        <BsYoutube className="link-danger" /> watch trailer
                    </Card.Link>
                )}
                <OrderTickets movieId={id} movieTitle={name} />
            </Card.Body>
        </Card>
)};

export default MovieCard;
