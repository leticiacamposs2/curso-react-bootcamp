import React from 'react';

import FormInput from '../FormInput';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            email: "",
            cpf: "",
            phone: ""
        };
    }

    render() {
        return (
            <div>
                <p>aaaaaaaa</p>
                <form>
                    <FormInput 
                        label="nome completo"
                        value={this.state.name}
                        name="name"
                    />

                    <FormInput 
                        label="cidade"
                        value={this.state.city}
                        name="city"
                    />

                    <FormInput 
                        inputType="email"
                        label="email"
                        placeholder="email@email.com"
                        value={this.state.email}
                        name="email"
                    />

                    <FormInput
                        label="cpf"
                        placeholder="000.000.000-00"
                        value={this.state.cpf}
                        name="cpf"
                    />

                    <FormInput 
                        label="telefone"
                        placeholder="(xx) xxxxx-xxxx"
                        value={this.state.phone}
                        name="phone"
                    />
                </form>
            </div>
        );
    }

}

export default RegisterForm;