import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from './components/Home'
import Users from './components/Users'
import Posts from './components/Posts'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menuList">
            <li className="menuItem"><Link to="/">Home</Link></li>
            <li className="menuItem"><Link to="/users">Users</Link></li>
            <li className="menuItem"><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
