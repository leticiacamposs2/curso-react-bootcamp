import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props) {
        super(props);
        
        this.stateInicial = {
            name: "",
            city: "",
            email: "",
            cpf: "",
            phone: ""
        }
    
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {

        const { name, city, email, cpf, phone } = this.state;

        return (
            <form>
                <label>nome completo</label><br/>
                <input
                    type="text"
                    name="nome"
                    value={name}
                    onChange={this.escutadorDeInput}/>
                <p/>

                <label>cidade</label><br/>
                <input 
                    type="text"
                    name="cidade"
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
            </form>
        );
    }
}

export default FormInput;