import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function CardFilms(props) {

    const { title, description } = props

    return (
        <>
          <CardDeck className="card-deck">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>{title}</Card.Header>
                    <Card.Body className="shadow p-3 mb-5 bg-white rounded">
                        <Card.Text className="block-with-text">{description}</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>
    );
}

export default CardFilms;
