import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import PlayerList from './components/PlayerList';
import Dash from './components/Dash';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/players'>
        <PlayerList />
      </Route>
      <Route exact path='/dash'>
        <Dash />
      </Route>
    </Router>
  );
}

export default App;
