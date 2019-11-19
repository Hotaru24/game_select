import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import GameList from './GameList/GameList';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={GameList}/>
    </Switch>
  );
}

export default App;
