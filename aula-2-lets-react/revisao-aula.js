/* {  JSX  } - Incorporando expressões */

const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
    element,
    document.getElementById("root")
);


/* {  JSX  } - Utilizando dentro de funções, em loops e ifs */

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}


/* {  JSX  } - Receber atributos */

const element = <img src={user.avatarUrl}></img>
const element = <div tabIndex="0"></div>


/* {  JSX  } - Pode conter children */

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);


/* {  Props  } - Utilização */

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Leticia Campos"/>;

ReactDOM.render(
    element,
    document.getElementById("root")
);


/* {  Class Component  } */

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myState: true
        }
    }

    render() {
        return(
            <div>
                <h1>Hello Person</h1>
            </div>
        );
    }
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


/* {  Class Component  } - Controlando estados */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return(
            <div>
                <h1>Hello, word!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);