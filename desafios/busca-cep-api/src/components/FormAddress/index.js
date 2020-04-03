import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';

const FormAddress = (props) => {
    const { logradouro, bairro, localidade, uf } = props

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form style={{ textAlign: 'left' }}>
                        <FormGroup>
                            <Label for="logradouro">Logradouro</Label>
                            <Input
                                name="logradouro"
                                value={logradouro}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bairro">Bairro</Label>
                            <Input
                                name="bairro"
                                value={bairro}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="localidade">Localidade</Label>
                            <Input
                                name="localidade"
                                value={localidade}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="uf">UF</Label>
                            <Input
                                name="uf"
                                value={uf}
                            />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormAddress;