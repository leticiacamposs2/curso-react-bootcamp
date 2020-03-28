import React, { Component } from 'react';

import SubmitButton from '../SubmitButton';

class FormInput extends Component {

    mensagens = [];

    constructor(props) {
        super(props);
        
        this.stateInicial = {
            name: "",
            city: "",
            email: "",
            cpf: "",
            phone: "",
            msgError: false
        }
    
        this.state = this.stateInicial;

        this.validator = new SubmitButton([
            {
                campo: 'name',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'nome, '
            },
            {
                campo: 'city',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'cidade, '
            },
            {
                campo: 'email',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'e-mail, '
            },
            {
                campo: 'cpf',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'CPF, '
            },
            {
                campo: 'phone',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'telefone '
            },
        ]);
    }    
    
    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
            
    addAlunas(aluna) {
        if (!this.validator.valida(aluna)) {
            localStorage.setItem('list_alunas', JSON.stringify(aluna));
            this.setState({ name: "", city: "", email: "", cpf: "", phone: "", msgError: false })
        } else {
            this.mensagens = [];
            this.mensagens.push(this.validator.valida(aluna));
            this.setState({ msgError: true })
        }
    }

    render() {

        const { name, city, email, cpf, phone, msgError } = this.state;

        return (
            <form>
                { msgError ? 
                    <span>** Por favor, preencha o(s) campo(s): {this.mensagens[0]}</span> 
                    : ''}
                <p/>

                <label>nome completo</label><br/>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.escutadorDeInput}/>
                <p/>

                <label>cidade</label><br/>
                <input 
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.escutadorDeInput}/>
                <p/>

                <label>email</label><br/>
                <input 
                    type="text"
                    name="email"
                    value={email}
                    placeholder="email@email.com"
                    onChange={this.escutadorDeInput}/>
                <p/>

                <label>cpf</label><br/>
                <input
                    type="text"
                    name="cpf"
                    value={cpf}
                    placeholder="000.000.000-00"
                    onChange={this.escutadorDeInput} />
                <p/>

                <label>telefone</label><br/>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="(xx) xxxxx-xxxx"
                    onChange={this.escutadorDeInput} />
                <p/>

                <button
                    onClick={() => this.addAlunas(this.state)}
                    type="button">Inscrever
                </button>
            </form>
        );
    }
}

export default FormInput;