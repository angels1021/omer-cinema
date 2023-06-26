import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent,CardMedia, Typography, Chip} from "@mui/material";

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
    }, [movies])

    return (
        <div className="grid-layout">
            {movies?.map(({ id, name , posterLink, length, releaseYear}) => (
                <Card key={id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={posterLink}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        {!!length && <Chip label={`length: ${length}`}/>}
                        {!!releaseYear && <Chip label={`releaseYear: ${releaseYear}`} color="primary"/>}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};

export default Home;