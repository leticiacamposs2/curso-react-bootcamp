import React from 'react';
import './App.css';
import Giphy from './Giphy';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div>
        <label>Pesquise um gif: </label>
        <input />
        <button onClick={this.handleClick}>Pesquisar</button>
        {this.state.clicked ? <Giphy /> : null}
      </div>
    );
  }
};

export default App;