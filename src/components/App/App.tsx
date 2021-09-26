import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cookies from '../Cookies/Cookies';
import Home from '../Home/Home';
import NoMatch from '../NoMatch/NoMatch';
import ReportForm from '../ReportForm/ReportForm';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/cookie">Cookies policy</Link>
            </li>
          </ul>
        </nav>
        <main className="App-main">
          <Switch>
            <Route path="/cookie">
              <Cookies />
            </Route>
            <Route path="/department/:name">
              <ReportForm />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
