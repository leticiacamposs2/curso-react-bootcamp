import React from 'react';
import Giphy from '../Giphy';
import './style.css';
class Home extends React.Component {
    constructor(props) {
        super(props)

        this.stateInicial = {
            search: "",
            clicked: false
        }

        this.state = this.stateInicial;

        this.handleClick = this.handleClick.bind(this);
    }

    inputText = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {

        const { search } = this.state;

        return (
            <div className="search">
                <h1><label>Pesquise um GIF</label></h1>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={this.inputText} />
                <button onClick={this.handleClick}>Pesquisar</button>
                {this.state.clicked ? <Giphy search={search}/> : null}
            </div>
        );
    }
};

export default Home;