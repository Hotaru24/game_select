import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GameList from './GameList/GameList';
import Screenshots from './Screenshots/Screenshots'
import './App.css';

function App() {
  return (
  <div className='App'>
    <Switch>
      <Route exact path="/" component={GameList}/>
      <Route path="/jeu/screenshots/:id" component={Screenshots}/>
    </Switch>
  </div>
    
  );
}

export default App;
