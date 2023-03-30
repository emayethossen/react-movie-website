import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Home = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => <Movie handleWatchTime={props.handleWatchTime} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default Home;