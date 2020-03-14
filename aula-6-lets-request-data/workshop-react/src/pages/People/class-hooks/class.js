import React from 'react';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://lv7gfyq1gc.execute-api.us-east-1.amazonaws.com/jsday/list")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            items: result.Items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {items.map(item => (
            <div key={item.id} class="card">
              <img src={item.photo} class="card-img-top" alt={`Foto de ${item.username}`} />
              <div class="card-body">
                <h5 class="card-title">{item.username}</h5>
                <p class="card-text">{item.job}</p>
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default People
