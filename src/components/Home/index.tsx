import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Badge} from 'react-bootstrap';

import {getMovies} from "../../services";
import {moviesActions,moviesSelectors} from "../../store";
import './style.css';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(moviesSelectors.selectMovies);

    useEffect(() => {
        if (movies.length) return;

        getMovies().then(({data}) => {
            console.log({data})
            dispatch(moviesActions.setMovies(data));
        });
    }, [movies, dispatch])

    return (
        <div className="movies-layout">
            {movies?.map(({ id, name , posterLink, length, releaseYear}) => (
                <Card key={id}>
                    <Card.Img
                        variant="top"
                        src={posterLink}
                        alt={name}
                    />
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <div className="card-pills">
                            {!!length && <Badge pill bg="info">length: {length}</Badge>}
                            {!!releaseYear && <Badge pill bg="dark">releaseYear: {releaseYear}</Badge>}
                        </div>

                    </Card.Body>
                </Card>
            ))}
        </div>
    )
};

export default Home;