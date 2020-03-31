import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.png';
import CardFilms from '../CardFilms';
import { Container } from 'react-bootstrap';

function Home() {
    
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://ghibliapi.herokuapp.com/films',
            );
            setMovies(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
        <Container>
            <img src={logo} alt="logo dos studios glibi"/>
            <hr/>
            {movies && movies.map(movie => (
                <CardFilms key={movie.id} title={movie.title} description={movie.description}/>
            ))}
        </Container>
        </>
    );
}

export default Home;