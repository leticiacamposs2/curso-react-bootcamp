
import React, { Component, Fragment } from 'react'
 
import Loading from './Loading'
 
import { getUsers } from '../services/api'
 
class Users extends Component {
 
    state = {
        loading: false
    }
 
    getUsers = async () => {
        this.setState({ loading: true })
        const response = await getUsers().then(response => {
            this.setState({ loading: false })
            return response
        })
        console.log({ response })
    }
 
    render() {
        const { loading } = this.state
 
        return (
            <Fragment>
                <button onClick={this.getUsers}>Buscar usuários</button>
                <Loading loading={loading} message='Carregando usuários...' />
            </Fragment>
        )
    }
}
 
export default Users