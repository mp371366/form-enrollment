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
import { CSSProperties, useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const themeStyle: CSSProperties
    = theme === 'dark'
    ? {
      "--main-bg-color": "#282c34",
      "--snd-bg-color": "rgb(71, 71, 71)",
      "--font-color": "white",
    } as CSSProperties
    : {
      "--main-bg-color": "white",
      "--snd-bg-color": "rgb(222, 222, 222)",
      "--font-color": "black",
    } as CSSProperties
  ;
  const icon
    = theme === 'dark'
    ? 'fa fa-sun-o'
    : 'fa fa-moon-o'
  ;

  return (
    <Router>
      <div className="App" style={themeStyle}>
        <nav className="App-header">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/cookie">Cookies policy</Link>
            </li>
          </ul>
          <button className="App-theme-button" onClick={changeTheme}>
            <i className={icon} aria-hidden="true" /> 
          </button>
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
