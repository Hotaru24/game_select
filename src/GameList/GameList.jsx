import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios'
import Game from '../Game/Game';
import './GameList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { thisExpression } from '@babel/types';

const GameList = () => {

  const [gameList, setgameList]  = useState([]);
  const [banGamesId, setbanGamesId]  = useState([]);
  const [filterd, setfilterd] = useState(false);
    
  const deleteGame = (id) => {
    setbanGamesId([...banGamesId, id]);
  };

  const toogleFilter = () => {
    setfilterd(!filterd);
  }

  useEffect(() => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then((result) => {
      setgameList(result.data)
      console.log(result.data)
    })
  }) 
  
    return (
      <Fragment>
        <div className='Nav'>
          <h1>Game List</h1>
          <button onClick={toogleFilter}>Best games only</button>
        </div>
        <div className='cardList'>
          {gameList.filter(game => !banGamesId.includes(game.id))
          .filter(game => !filterd || game.rating >= 4.5)
          .map(
            (game, index) => {
              return (
                <div key={index}> 
                  <Game  game={game}/>
                  <button onClick={() => deleteGame(game.id)}> Delete</button>
                </div>
              )
          })}
        </div>
      </Fragment>)
};

export default GameList;

