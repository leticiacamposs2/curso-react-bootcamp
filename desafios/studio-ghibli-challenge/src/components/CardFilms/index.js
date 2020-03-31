import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function CardFilms(props) {

    const { title, description } = props

    return (
        <>
        <CardDeck className="card-deck">
            <div className="teste">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>{title}</Card.Header>
                    <Card.Body className="shadow p-3 mb-5 bg-white rounded">
                        <Container>
                            <Card.Text className="block-with-text">{description}</Card.Text>
                        </Container>
                    </Card.Body>
                </Card>
        </div>
            </CardDeck>
        </>
    );
}

export default CardFilms;
