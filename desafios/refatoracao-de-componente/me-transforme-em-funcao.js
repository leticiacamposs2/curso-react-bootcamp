import React, { useState } from 'react';
import { Form, Button } from 'semantic-react-ui'

function ExampleComponent(props) {

    const [showForm, setShowForm] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState(props.name)

    componentDidMount() {

        /* algum fetch de dado que a gente quer rodar somente uma vez
        ....................
        */
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        /* executa alguma request 
        ....................
        */
    }


    toggleShowForm = (e) => {
        this.setState({
            showForm: !setShowForm,
        })
    }

    // RENDERS ------------------------------

    const renderForm = () => {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Input name="name" value={name} onChange={e => setName(e.target.value)} />
            <Form.Input name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Button type="submit">Submit!</Form.Button>
        </Form>
    }

    // RENDER --------------------------------
        return (
            <div >
                {showForm ? this.renderForm()
                    : <Fragment>
                        <h3>Hi, {this.state.name}</h3>
                        <Button onClick={toggleShowForm} >Enter Email Address!</Button>
                    </Fragment>
                }
            </div>
        )
}

export default ExampleComponent

