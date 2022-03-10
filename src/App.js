import logo from './logo.svg';
import './App.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';
import Navbar from './components/Navbar';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route> <Navbar /> </Route>
        <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route path="/register"> <RegisterPage /> </Route>
          <Route exact path="/users"> <UsersPage /> </Route>
          <Route path="/users/:id"> <SingleUserPage /> </Route>
          <Route path="/login"> <LoginPage /> </Route>
          <Route path="/logout"> <Logout /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
