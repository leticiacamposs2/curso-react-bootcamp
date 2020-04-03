import React from 'react';
import { 
    Jumbotron, 
    Container, 
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
 } from 'reactstrap';

import BuscaCep from './../BuscaCep';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cep: '',
            clicked: false
        };
    }

    handleChange = field => {
        const { name, value } = field.target;
        this.setState({ [name]: value });
    };

    buttonClicked() {
        this.setState({ clicked: true });
    }
    
    render() {

        const { cep, clicked } = this.state;

        return (
            <>
                <Jumbotron fluid>
                    <Container>
                        <h1 className="display-3">Busca de CEP</h1>
                        <p className="lead">Faça as suas consultas individuais de CEP através do formulário abaixo.</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form style={{ textAlign: 'left' }}>
                                <FormGroup>
                                    <Label for="cep">CEP</Label>
                                    <Input
                                        name="cep"
                                        value={cep}
                                        onChange={this.handleChange}
                                        maxLength={9}
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Button 
                            style={{ "height": "60px" }}
                            onClick={() => this.buttonClicked()}>Pesquisar
                        </Button>
                    </Row>
                </Container>
                <hr/>
                {clicked ? <BuscaCep cep={cep}/> : ''}
            </>
        );
    }
};

export default Home;