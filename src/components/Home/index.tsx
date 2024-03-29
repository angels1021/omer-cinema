import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Badge} from 'react-bootstrap';

import {getMovies} from "../../services";
import {moviesActions,moviesSelectors} from "../../store";
import MovieCard from './MovieCard';
import './style.css';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(moviesSelectors.selectMovies);

    useEffect(() => {
        if (movies.length) return;

        getMovies().then(({data}) => {
            dispatch(moviesActions.setMovies(data));
        });
    }, [movies, dispatch])

    return (
        <div className="movies-layout">
            {movies?.map((movie) => !!movie.posterLink && (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    )
};

export default Home;