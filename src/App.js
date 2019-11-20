import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import GameList from './GameList/GameList';
import Screenshots from './Screenshots/Screenshots'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GameList}/>
      <Route path="/jeu/screenshots/:id" component={Screenshots}/>
    </Switch>
  );
}

export default App;
