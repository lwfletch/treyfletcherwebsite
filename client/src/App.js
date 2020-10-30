import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menuList">
            <li className="menuItem"><Link to="/">Home</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
