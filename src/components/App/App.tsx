import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cookies from '../Cookies/Cookies';
import Home from '../Home/Home';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <ul>
            <li>
              <Link className="App-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="App-link" to="/cookie">Cookies policy</Link>
            </li>
          </ul>
        </nav>
        <main className="App-main">
          <Switch>
            <Route path="/cookie">
              <Cookies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
