import React, { Component } from 'react';

const alunas = JSON.parse(localStorage.getItem('list_alunas')) || [];

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
            
    addAlunas(aluna) {
        localStorage.setItem('list_alunas', JSON.stringify(aluna));
        this.setState({ name: "", city: "", email: "", cpf: "", phone: "" })
    }

    render() {

        const { name, city, email, cpf, phone } = this.state;

        return (
            <form>
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