import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        {/* Um <Switch> examina seus filhos <Route> e
            renderiza o primeiro que corresponde a URL atual. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* A página de tópicos tem seu próprio <Switch> com mais rotas
          que se baseiam no caminho da URL / topics. Você pode pensar no
          2º <Route> aqui como uma página de "índice" para todos os tópicos ou
      a página que é mostrada quando nenhum tópico é selecionado */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
         <Topic /> 
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
}