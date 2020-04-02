import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import BuscaCep from './components/BuscaCep';

const App = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Busca de CEP</h1>
          <p className="lead">Faça as suas consultas individuais de CEP através do formulário abaixo.</p>
        </Container>
      </Jumbotron>
      <BuscaCep/>
    </>
  );
};

export default App;