import React from 'react';

import FormInput from '../FormInput';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <FormInput />
            </form>
        );
    }

}

export default RegisterForm;