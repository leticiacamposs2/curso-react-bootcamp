import React, { Component } from 'react';

class MyComponent extends Component {
    myClickFunc = () => {
        console.log('clickity clickcty')
    }

    sum = (valueA, valueB) => {
        return valueA + valueB
    }

    render() {
        return (
            <div className="MyComponent">
                <p className="MyComponent-intro" onClick={this.myClickFunc}></p>
            </div>
        );
    }
}

export default MyComponent;