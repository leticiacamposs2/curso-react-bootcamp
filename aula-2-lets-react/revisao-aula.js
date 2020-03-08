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


/* {  Props  } - Utlização */

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Leticia Campos"/>;

ReactDOM.render(
    element,
    document.getElementById("root")
);