
import React, { Component, Fragment } from 'react'
import Loading from './Loading'
import { getDepartments } from '../service/api'
 
class Departments extends Component {
 
    state = {
        loading: false
    }
 
    getDepartments = async () => {
        this.setState({ loading: true })
        const response = await getDepartments().then(response => {
            this.setState({ loading: false })
            return response
        })
        console.log({ response })
    }
 
    render() {
        const { loading } = this.state
 
        return (
            <Fragment>
                <button onClick={this.getDepartments}>Buscar departamentos</button>
                <Loading loading={loading} message='Carregando departamentos...' />
            </Fragment>
        )
    }
}
 
export default Departments
